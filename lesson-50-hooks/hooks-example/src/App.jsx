import { useCallback, useId, useMemo, useState } from 'react'
import './App.css'
import MainTitle from './components/MainTitle.jsx'
import Modal from './components/Modal.jsx'
import { useLogger } from './hooks/useLogger.js'

function someComplexCalculations(num) {
  let i = 0;
  // while (i < 3000000000) i++;
  return i + num;
}



function App() {
  const [count, setCount] = useState(0);
  const [isRedColor, setIsRedColor] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const a = useId();

  console.log('Component App rendered', count, a);

  const result = useMemo(() => {
    return someComplexCalculations(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleInsideClick = useCallback(() => {
    console.log('Inside click', isRedColor);
  }, [isRedColor])

  useLogger(count);

  return (
    <>
      <MainTitle isRedColor={isRedColor} handleClick={handleInsideClick} />
      {result + count}
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setIsRedColor(isRed => !isRed)}>
          Repaint button
        </button>
      </div>
      <div>
        <button onClick={() => setIsModalOpen(true)}>Show modal</button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example with createPortal"
        >
          <p>Modal is rendered in different div</p>
        </Modal>
      </div>
    </>
  )
}

export default App
