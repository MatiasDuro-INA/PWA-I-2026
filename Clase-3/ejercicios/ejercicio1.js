const usuariosDB = {
    1: { nombre: "Ana", edad: 25 },
    2: { nombre: "Pedro", edad: 30 },
    3: { nombre: "Lucia", edad: 28 },
    4: { nombre: "Juan", edad: 22 },
};


// crear 2 funciones, para obtener los usuarios, una async await y otra con new promise
//  segun el id y usuariosDB


function obtenerUsuario(id, usuariosDB){


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const usuario = usuariosDB[id]

            if(usuario){
                resolve(usuario)
            }else{
                reject(`Usuario con id: ${id}, no existe`)
            }
            
        }, 500);
    })

}


async function mostrarUsuarios(ids, usuariosDB){

    let resultados = []

        for (const id of ids) {

        try {
            const usuario = await obtenerUsuario(id, usuariosDB)
            resultados.push(usuario)
        } catch (error) {
            console.log("error: ", error);
            
        }

    }

    console.log("resultados: ", resultados);
    
}


mostrarUsuarios([1, 2, 3, 4, 5, 8], usuariosDB)

