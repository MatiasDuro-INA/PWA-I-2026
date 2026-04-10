
function suma(num1, num2) {

    return num1 + num2
}


function resta(num1, num2) {

    return num1 - num2
}



function operacionMatematica(num1, num2, callback) {

    // console.log("callback: ", callback);


    return callback(num1, num2)
}


// console.log("Suma: ", operacionMatematica(5, 10, suma));
// console.log("Resta: ", operacionMatematica(5, 10, resta));
// console.log("Multiplicar: ", operacionMatematica(5, 10, function(num1, num2){ return num1 * num2}));
// console.log("Dividir: ", operacionMatematica(5, 10, (a, b) => a / b ));

// vimos algun ejemplo de callback antes?
// Metodos de arrays, son callbacks

// map, for each, filter, reduce

const numeros = [1, 2, 3, 4, 5]

numeros.map((num) => num * 2)



// asincronica

// callbacks Asincronicos
// metodo error first
function obtenerUsuario(id, callback) {

    setTimeout(() => {


        if (id === 3) {
            // ejemplo si algo sale mal

            const resp = callback("Usuario 3 no encontrado", null)
            return resp
        }



        // console.log(`El usuario de ID: ${id} se llama: ${"Mateo"}`);
        return callback(null, { id, nombre: `Usuario ${id} encontrado` })
    }, 2000);
}




const findUser = (error, usuario) => {

    // console.log(usuario);


    if (error) {
        // console.log("Sucedio un error");
        return error

    }

    setTimeout(() => {
        return usuario

    }, 3000);

}


const respuesta1 = obtenerUsuario(7, findUser)
const respuesta2 = obtenerUsuario(3, findUser)
const respuesta3 = obtenerUsuario(10, findUser)



// callback hell
// cuando tenemos anidacion de funciones, en una gran cantidad
// se vuelve dificil de leer, mantener y manejar errores


function llamadoUsers() {
    obtenerUsuario(1, (err, u1) => {
        if (err) {
            console.log("error");

            return
        }
        console.log("todo ok: ", u1);

        obtenerUsuario(2, (err, u2) => {
            if (err) {
                console.log("error");

                return
            }
            console.log("todo ok: ", u2);
        
        })

        obtenerUsuario(3, (err, u3) => {
            if (err) {
                console.log("error");

                return
            }
            console.log("todo ok: ", u3);
        
        })
    })
}

llamadoUsers()