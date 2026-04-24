import React, { useState } from 'react'

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState("")
    const [tareas, setTareas] = useState([])


    const handleClick = () => {

        console.log("click");

        console.log("nuevaTarea", nuevaTarea);

        setTareas([...tareas, { id: tareas.length + 1, titulo: nuevaTarea, completada: false }])

        // setTareas((prev) => [...prev, {id: 3, titulo: nuevaTarea, completada: false}])
        setNuevaTarea("")

        console.log(tareas);

    }

    const handleCheckbox = (id) => {

        const nuevasTareas = tareas.map(tarea => {

            return tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        })

        setTareas(nuevasTareas)

    }

    const eliminarTarea = (id) => {

        // id = 3



        const tareasRestantes = tareas.filter(tarea => {

            console.log("ID: ", id);
            console.log("TAREA: ", tarea);
            console.log(`ID: ${id} es distinto al id de la tarea ${tarea.id}?? es ${id !== tarea.id}`);


            return tarea.id !== id

        })

        setTareas(tareasRestantes)
    }



    return (
        <div style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
            <h2>Todo APP</h2>

            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <input
                    type="text"
                    placeholder='Escribi una tarea...'
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    style={{ flex: 1, padding: "6px 10px" }}

                />
                <button
                    onClick={handleClick}
                >Agregar</button>
            </div>

            <ul style={{ listStyle: "none", padding: 0 }}>

                {
                    tareas.map(tarea => (
                        <li
                            key={tarea.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 0",
                                borderBottom: "1px solid #eee",
                            }}
                        >

                            <input
                                type="checkbox"
                                onChange={() => handleCheckbox(tarea.id)}
                            />
                            <span style={{ flex: 1, textDecoration: tarea.completada ? "line-through" : "none", color: tarea.completada ? "#aaa" : "inherit" }}>
                                {tarea.titulo}
                            </span>
                            <button
                                onClick={() => eliminarTarea(tarea.id)}
                            >Eliminar</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}
