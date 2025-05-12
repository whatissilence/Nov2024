import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import '@testing-library/jest-dom'
import PostList from './PostList.jsx'


describe('PostList component', () => {
  // Мокаємо глобальний fetch
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              title: 'Test Title 1',
              body: 'Test Body 1',
            },
            {
              id: 2,
              title: 'Test Title 2',
              body: 'Test Body 2',
            },
          ]),
      })
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })


  it('fetches and displays posts', async () => {
    render(<PostList />)

    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    )

    // Ожидаем, пока появятся элементы из мок-данных
    await waitFor(() => {
      expect(screen.getByText('Test Title 1')).toBeInTheDocument()
      expect(screen.getByText('Test Body 1')).toBeInTheDocument()
      expect(screen.getByText('Test Title 2')).toBeInTheDocument()
      expect(screen.getByText('Test Body 2')).toBeInTheDocument()
    })
  })

  it('renders empty list if no posts returned', async () => {
    // Перезапись мока
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    )

    render(<PostList />)

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem').length).toBe(0)
    })
  })
})