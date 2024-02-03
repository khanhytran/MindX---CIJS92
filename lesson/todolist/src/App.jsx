import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoListApp from './component/TodoListApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoListApp/>
    </>
  )
}

export default App
