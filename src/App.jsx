import './App.css'
import Menu from './Componentes/Menu'
import Home from './Componentes/Home'
import Deportes from './Componentes/Deportes'
import Planes from './Componentes/Planes'
import LoginModal from './Componentes/LoginModal'
import Toasts from './Componentes/Toasts'
import DeporteDetalle from './Componentes/DeporteDetalle'
import PlanDetalle from './Componentes/PlanDetalle'
import Entrenadores from './Componentes/Entrenadores'
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
          <Route path="/planes" element={<Planes />} />
          <Route path="/planes/:id" element={<PlanDetalle />} />
          <Route path="/entrenadores" element={<Entrenadores />} />
        </Routes>
      </main>

      <LoginModal />
      <Toasts />
    </>
  )
}

export default App
