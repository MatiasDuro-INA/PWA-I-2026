import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Escuelas } from './screens/Escuelas'
import { CrearEscuela } from './screens/CrearEscuela'
import { EscuelaProvider } from './contexts/EscuelaContext'



function App() {


  return (
    <>
      <BrowserRouter>

        <EscuelaProvider>


          <Routes>
            <Route path='/' element={<Escuelas />} />
            <Route path='/crear-escuela' element={<CrearEscuela />} />

          </Routes>

        </EscuelaProvider>

      </BrowserRouter>
    </>
  )
}

export default App
