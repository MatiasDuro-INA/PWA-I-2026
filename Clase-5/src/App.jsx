import { useState } from 'react'
import './App.css'
import { TodoApp } from './components/todoApp/TodoApp'
import { EncuentroPokemon } from './components/Pokemon/EncuentroPokemon'
import { Titulo } from './components/Titulo'
import { TeamProvider } from './contexts/TeamContext'
import { Navbar } from './components/Navbar/Navbar'


const tareasIniciales = [
  // {id: 1, titulo: "Aprender React", completada: true},
  // {id: 2, titulo: "Aprender Hooks", completada: false},
]


function App() {



  return (
    <>
    <TeamProvider>

    {/* <TodoApp /> */}
    <Navbar/>
      <EncuentroPokemon/>
          
    </TeamProvider>
    </>
  )
}

export default App
