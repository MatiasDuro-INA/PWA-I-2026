import React from 'react'
import { useEscuela } from '../contexts/EscuelaContext'

export const Escuelas = () => {

    const { escuelas } = useEscuela()


  return (
    <>
    <h1>Escuelas:</h1>
   { escuelas.map(escuela => (
    <div style={{display: "flex", backgroundColor:"wheat", color:"black", padding:"10px", margin: "5px"}}>
      <h3>nombre: {escuela.nombre}</h3>
    </div>
   ))}
    </>
  )
}
