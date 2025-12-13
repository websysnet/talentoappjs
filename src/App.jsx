import './App.css'
import Menu from './Componentes/Menu'
import Home from './Componentes/Home'
import Deportes from './Componentes/Deportes'
import DeporteDetalle from './Componentes/DeporteDetalle'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Menu />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/deportes/:id" element={<DeporteDetalle />} />
        </Routes>
      </main>
    </>
  )
}

export default App
