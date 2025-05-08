
import './App.css'
import { Pagination, type PaginationProps } from 'antd'

function App() {

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const onPageChange = (event, value) => {
    console.log(event, value);
  }
å
  return (
    <>
      Hello
      <Pagination
        showSizeChanger
        onChange={onPageChange}
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </>
  )
}

export default App
