import React, { useState } from 'react'
import { useEffect } from 'react'
import "./styles.css"
import { Navbar } from '../Navbar/Navbar'
import { useTeam } from '../../contexts/TeamContext'


export const EncuentroPokemon = (props) => {

  console.log('encuentro pokemon props: ', props);

  const { equipo, setEquipo} = useTeam()

  
  // const usuario = useContext(userContext)
  // const carrito = useContext(cartContext)
  // const usuario = useUser()
  // const carrito = useCart()
  

  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [loading, setLoading] = useState(false)


  const fetchRandomPokemon = async () => {

    setLoading(true)
    try {
      const randomId = Math.floor(Math.random() * 151 + 1)

      console.log("randomID: ", randomId);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      const pokemon = await response.json()

      setTimeout(() => {
        setCurrentPokemon(pokemon)
        setLoading(false)
      }, 500);

    } catch (error) {

    }


  }



  //   useEffect(() => {
  //   // first
  //   // Aca se ejecuta, todo lo que yo quiera que se ejecute cuando se carga el componente

  //   return () => {
  //     // aca va, dentro del return, todo lo que quiero que se ejecute cuando se desmonta el componente
  //   }
  // }, [third])

  // este useEffect, hace que fetchRandomPokemon, se ejecute una sola vez
  useEffect(() => {

    fetchRandomPokemon()

  }, []) // <- Array de dependencias

  // el [] array de depencias, contiene los motivos para causar re renders
  //


  // useEffect(() => {

  // }, [currentPokemon])




  if (!currentPokemon) {

    return (
      <h2>No hay pokemons cerca</h2>
    )
  }

  const handleCatch = () => {

    if (currentPokemon) {
      setEquipo([...equipo, currentPokemon])
    }

  }

  const handlePass = () => {
    fetchRandomPokemon()
  }




  return (

    <>

      {
        loading ? (
      <div className='loading'>
        <h2>Buscando un Pokemon Salvaje...</h2>
      </div>
    ) : (
      <div className='pokemon-card'>
        <div className='pokemon-header'>
          <h2 className='pokemon-title'>Aparecio un {currentPokemon.name}</h2>
        </div>

        <div className='pokemon-content'>
          <div className="pokemon-image-container">
            <img src={currentPokemon.sprites.other.showdown.front_default} alt={currentPokemon.name} className='pokemon-image' />
          </div>
        </div>


        <div className='pokemon-types'>
          {currentPokemon.types.map((type) => {


            return (
              <span key={type.type.name} className='pokemon-type'>
                {type.type.name}
              </span>
            )
          })}
        </div>


        <div className="pokemon-stats">
          <div className="pokemon-stat">
            <div className="pokemon-stat-label">Altura</div>
            <div>{currentPokemon.height / 10} m</div>
          </div>
          <div className="pokemon-stat">
            <div className="pokemon-stat-label">Peso</div>
            <div>{currentPokemon.weight / 10} kg</div>
          </div>
        </div>


        <div className='pokemon-actions'>
          <button onClick={handleCatch} className='btn btn-catch' disabled={equipo.length < 6 ? false : true}>
            { equipo.length < 6 ? "Capturar!" : "Equipo Completo"}
          </button>

          <button onClick={handlePass} className='btn btn-pass' >
            Buscar otro
          </button>
        </div>

      </div>
    )
      }


    </>
  )
}
