import { useState } from 'react'
import './App.css'
import { Todo } from './Todo'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Todo/>
    </>
  )
}