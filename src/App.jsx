import { useState } from 'react'
import './App.css'
import Header from './components/Header/header';
import {Route, Routes, Navigate} from 'react-router-dom';
import { MarcaProvider } from './context/dataContext';
import ListaFormulario from './pages/ListaFormulario/ListaFormulario';
import Formulario from './pages/Formulario/Formulario';
function App() {
  const [count, setCount] = useState(0)

  return (
    
  <div className='App'>
    <MarcaProvider>
    <Header/>
    <Routes>
        <Route path='/' element={<Navigate to="/Formulario"/>} />
        <Route path='/Formulario' element={<Formulario/>} /> 
        <Route path='/ListaFormulario' element={<ListaFormulario/>} /> 
        <Route path='/*' element={<Navigate to="/Formulario"/>} />
    </Routes>
    </MarcaProvider>
  </div>
  )
}

export default App
