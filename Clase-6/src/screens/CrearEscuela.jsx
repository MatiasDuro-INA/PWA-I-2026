import React from 'react'
import { useState } from 'react'
import { useEscuela } from '../contexts/EscuelaContext'

export const CrearEscuela = () => {


    const {agregarEscuela} = useEscuela()

    const [nombre, setNombre] = useState("")

    const crearEscuela = () => {

       agregarEscuela(nombre)

    }


  return (
    
    <div style={{backgroundColor: "grey", display:"flex", flexDirection:"column", width: "300px"}}>
      <h2>Crear Escuela</h2>
      <input type="text" placeholder='nombre'  value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <button onClick={crearEscuela}>Crear Escuela</button>
    </div>
  )
}
