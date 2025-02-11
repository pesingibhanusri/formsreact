import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginform from './Components/forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loginform></Loginform>
    </>
  )
}

export default App
