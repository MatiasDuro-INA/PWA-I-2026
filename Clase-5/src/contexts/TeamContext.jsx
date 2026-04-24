import { createContext, useContext, useState } from "react";


export const TeamContext = createContext()


// custom hook
// uno puede crear cualquier custom hook, que no es mas que una funcionalidad encapsulada
// que tiende uno a usar varias veces

export const useTeam = () => useContext(TeamContext)


import React from 'react'

export const TeamProvider = ({children}) => {

      const [equipo, setEquipo] = useState([])

    console.log("children en context: ", children);
    

    return (
        <TeamContext.Provider value={{equipo, setEquipo}}>
            {children}
        </TeamContext.Provider >
    )
  
}
