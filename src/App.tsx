import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AccountCreate } from "../src/AccountCreate.tsx"
function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <AccountCreate>
        
      </AccountCreate>
    </div>
  )
}

export default App
