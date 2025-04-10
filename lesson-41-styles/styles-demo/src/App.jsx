import './App.scss';
import MyComponent from './MyComponent.jsx'
import TextComponent from './TextComponent.jsx'
import Bordered from './Bordered.jsx'
import ExampleStyledComp from './ExampleStyledComp.jsx'

function App() {

  return (
    <>
      <h1 className="special">Hello</h1>
      <MyComponent /><br />
      <TextComponent>Text which should go to Children</TextComponent><br />
      <Bordered /><br />
      <ExampleStyledComp />
    </>
  )
}

export default App
