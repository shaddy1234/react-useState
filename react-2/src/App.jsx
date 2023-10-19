import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const add = () => {
  setCount(prevCount => prevCount + 1)
}
const subtract = () => {
  setCount(prevCount => prevCount - 1)
}

  return (
    <div className='main-b'>
      <div>
        <button onClick={subtract}><span>-</span></button>
      </div>
      <button className='count'>
        {count}
      </button>
      <div>
        <button onClick={add}><span>+</span></button>
      </div>

    </div>
  )
}
export default App
