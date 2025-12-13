import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Menu'
import Home from './Componentes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>        
         
          <Menu />
          <Home />  
       
    </>
  )
}

export default App
