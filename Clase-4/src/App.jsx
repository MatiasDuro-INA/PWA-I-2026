import './App.css'
import { ListaSimpsons } from './components/ListaSimpsons/ListaSimpsons'
import { Tarjeta } from './components/Tarjeta/Tarjeta'


const usuarios = [
  { nombre: "Lucas", descripcion: "Soy alumno"},
  { nombre: "Laura", descripcion: "Soy alumno"},
  { nombre: "Facu", descripcion: "Soy alumno"},
  { nombre: "Sofia", descripcion: "Soy Profe"},
]


function App() {
// que es un componente de react? no es mas que una funcion, que retorna un nodo

// cuando una funcion, retorna un parentesis, significa en react que retorna un nodo

// <> </> significan fragmento
  return (
    <> 

    {/* {
      usuarios.map((user) => (
        <Tarjeta nombre={user.nombre} descripcion={user.descripcion} />
      ))
    } */}
    <ListaSimpsons/>

    </>
  )
}

export default App
