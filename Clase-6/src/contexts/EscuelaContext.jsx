import { useContext } from "react";
import { createContext } from "react";


export const EscuelaContext = createContext()

export const useEscuela = () => useContext(EscuelaContext)


export const EscuelaProvider = ({ children }) => {

    const escuelas = [
        { id: 1, nombre: "Nuevo sol" },
        { id: 2, nombre: "PIO IX" },
        { id: 3, nombre: "Sagrado Corazon" },
        { id: 4, nombre: "SUMA" }
    ]

    const agregarEscuela = (nombre) => {

        console.log();
        
        escuelas.push({
            id: escuelas.length + 1,
            nombre: nombre
        })

        console.log("Escuelas: ", escuelas);
        
    }



    return (
        <EscuelaContext.Provider value={{ escuelas, agregarEscuela }}>
            {children}
        </EscuelaContext.Provider>
    )

}