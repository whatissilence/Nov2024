import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ExampleForm from './ExampleForm.jsx'

describe('ExampleForm', () => {
  it('renders without crashing', () => {
    render(<ExampleForm />)

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Age')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Repeat password')).toBeInTheDocument();
  })

  it('Username validation should work', async () => {
    render(<ExampleForm />);
    const usernameInput = screen.getByPlaceholderText('Username');

    fireEvent.focus(usernameInput);
    fireEvent.blur(usernameInput);

    const errorBlock = await screen.findByText('Username is required');
    expect(errorBlock).toBeInTheDocument();

    fireEvent.input(usernameInput, {
      target: { value: 'qqq' }
    })

    const errorBlockMin5 = await screen.findByText('Username should be at least 5 symbols');
    expect(errorBlockMin5).toBeInTheDocument();

    fireEvent.input(usernameInput, {
      target: { value: 'qqqqqq' }
    })

    await waitFor(async () => {
      const errorBlockShouldGo = await screen.findByText('Username should be at least 5 symbols')
      expect(errorBlockShouldGo).to.not.toBeInTheDocument();
    })
  })

  it('Shows empty field error', async () => {
    render(<ExampleForm />)

    fireEvent.focus(screen.getByPlaceholderText('Email'));
    fireEvent.blur(screen.getByPlaceholderText('Email'));

    fireEvent.focus(screen.getByPlaceholderText('Age'));
    fireEvent.blur(screen.getByPlaceholderText('Age'));

    fireEvent.focus(screen.getByPlaceholderText('Password'));
    fireEvent.blur(screen.getByPlaceholderText('Password'));

    fireEvent.focus(screen.getByPlaceholderText('Repeat password'));
    fireEvent.blur(screen.getByPlaceholderText('Repeat password'));


    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('You should be 18 years old')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
      expect(screen.getByText('Repeat password is required')).toBeInTheDocument();
    })
  })
})