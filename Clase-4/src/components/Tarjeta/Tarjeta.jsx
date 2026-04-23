import React, { useState } from 'react'
import './styles.css'
import { Titulo } from '../Titulo/Titulo'
import { Descripcion } from '../Descripcion/Descripcion'

export const Tarjeta = ({nombre, descripcion}) => {

 const [numero, setNumero ] = useState(0)
//  const [botonPrincipal, setBotonPrincipal ] = useState()

  const incrementar = () => {

    // va a setear, al state numero, como lo que vaya dentro del parentesis
    // va a setear al state numero, como numero + 1
    setNumero(numero + 1)
    console.log("click: ", numero);
    
  }

  return (
    <div className='card-container'>
        {/* <h1>nombre: {props.nombre}</h1> */}
        <Titulo nombre={nombre}/>
        <Descripcion descripcion={numero} />
        <button onClick={incrementar}>Comprar</button>
    </div>
  )
}
