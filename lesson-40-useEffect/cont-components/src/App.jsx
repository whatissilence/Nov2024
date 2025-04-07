import ControlledEmail from './components/ControlledEmail.jsx'
import UncontrolledEmail from './components/UncontrolledEmailEvent.jsx'
import Card from './components/Card.jsx'
import MyForm from './components/MyForm.jsx'
import EffectDemoComponent from './components/EffectDemoComponent.jsx'
import { useState } from 'react'

function App() {
  const [showEffect, setShowEffect] = useState(true);

  return (
    <>
      <button onClick={() => setShowEffect(prev => !prev)}>Toggle Effects</button>
      { showEffect && (
      <Card color='lightblue'>
        <EffectDemoComponent />
      </Card>
      )}
      <Card>
        <ControlledEmail />
        <strong>Very Important Text</strong>
      </Card>
      <Card>
        <UncontrolledEmail />
      </Card>
      <Card>
        <MyForm />
      </Card>
    </>
  )
}

export default App
