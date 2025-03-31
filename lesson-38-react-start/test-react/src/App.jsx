import './App.css'
import MySpecialButton from './MySpecialButton.jsx'

function App() {
  return (
    <>
      <div>
        <MySpecialButton start={0} diff={10} text="Me first!" onClick={(test) => {console.log(test)}} > Some text </MySpecialButton>
      </div>
      <div>
        <MySpecialButton start={100} diff={15} text="Want to be first!" onClick={(test) => {alert(test)}}  />
      </div>
      <div>
        <MySpecialButton start={1000} diff={20} text="Don't care!" />
      </div>
    </>
  )
}

export default App
