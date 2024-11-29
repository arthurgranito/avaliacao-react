import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Vitrine from './components/Vitrine'
import Sobre from './components/Sobre'
import Detalhes from './components/Detalhes'

function App() {
  return (
    <>
      <Nav /> 

      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/vitrine" element={<Vitrine />}/>
        <Route path="/sobre" element={<Sobre />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
      </Routes>
    </>
  )
}

export default App
