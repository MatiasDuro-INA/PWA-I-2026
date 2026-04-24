import React from 'react'
import { useTeam } from '../../contexts/TeamContext'

export const Navbar = () => {

    const { equipo, setEquipo} = useTeam()
  

  return (

          <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-header">
              <div className="team-counter">Equipo: {equipo.length}/6</div>
            </div>


            <div className="team-section">
              <div className="team-label">Nuestro Equipo:</div>
              {equipo.length === 0 ? (
                <div className="team-empty">Aún no has capturado ningun Pokemon...</div>
              ) : (
                <div className="team-list">
                  {equipo.map((pokemon) => (
                    <div key={pokemon.id} className="team-pokemon">
                      <img src={pokemon.sprites.front_default || "/placeholder.svg"} alt={pokemon.name} />
                      <span className="team-pokemon-name">{pokemon.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

  )
}
