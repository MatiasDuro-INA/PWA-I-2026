import React, { useState } from 'react'
import { TarjetaSimpson } from './TarjetaSimpson'

export const ListaSimpsons = () => {

  const [simpsons, SetSimpsons] = useState([])


  const llamarApi = async () => {
    const respuesta = await fetch("https://thesimpsonsapi.com/api/characters")
    const data = await respuesta.json()
    console.log("data: ", data);
    
    SetSimpsons(data.results)
  }

  llamarApi()

 

  return (
    <>
    {
      simpsons.map((simp) => (
              <TarjetaSimpson id={simp.id} nombre={simp.name} edad={simp.age} genero={simp.gender} birthdate={simp.birthdate} status={simp.status} />
      ))
    }
      </>

  )
}

