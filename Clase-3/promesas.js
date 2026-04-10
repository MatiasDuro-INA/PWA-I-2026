// las promesas representan un valor que va a existir a futuro
// va a estar disponible, mas adelante, de la ejecucion


function obtenerUsuarioPromise(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id === 3) {

                const resp = reject("Usuario 3 no encontrado")
                return resp
            }

            return resolve({ id, nombre: `Usuario ${id} encontrado` })
        }, 50);
    })

}


// uso basico para manejar promesas:
// THEN - Se utiliza para ir avanzando en la promesa
// CATCH - Se utiliza para atrapar cualquier error en la promesa
// FINALLY - es opcional, se ejecuta siempre al final de la promesa


// obtenerUsuarioPromise(7).then((respuesta) => {
//     console.log("respuesta: ", respuesta);
// }).catch((error) => {
//     console.log("Promesa Rechazada: ", error);
    
// }).finally(() => {
//     console.log("Siempre se ejecuta al final, independientemente si fallo o no");
    
// })

// obtenerUsuarioPromise(3).then((respuesta) => {
//     console.log("respuesta: ", respuesta);
// }).catch((error) => {
//     console.log("Promesa Rechazada: ", error);
    
// })




// obtenerUsuarioPromise(1).then((u1) => {

//     console.log("Usuario 1: ", u1);
    
//     return obtenerUsuarioPromise(2) // devuelve otra promesa
// }).then((u2) => {
//     console.log("Usuario 2: ", u2);
//     return obtenerUsuarioPromise(3) // devuelve otra promesa

// }).then((u3) => {
//     console.log("Usuario 3: ", u3);
//     return obtenerUsuarioPromise(4) // devuelve otra promesa

// }).then((u4) => {
//     console.log("Usuario 4: ", u4);
//     return obtenerUsuarioPromise(5) // devuelve otra promesa

// }).catch((err) => {
//     console.log("error: ", err);
// })

// Promise.ALL
// Ejecuta todas las promesas, de una
//  Si falla una, todo el proceso se rechaza

// Promise.all([obtenerUsuarioPromise(1), obtenerUsuarioPromise(2), obtenerUsuarioPromise(5)])
// .then((resp)=> {
//     console.log(resp);
// })
// .catch((err) => {
//     console.log("Fallo: ", err);
// })



// async / await

// el await funciona solo dentro de una funcion async
// como convertimos a una funcion normal, en funcion async

// agregando la palabra async a la funcion

// async function probarAsincronica(){

// }


const probarAsincronica = async (id) => {
    console.log("Arranca la peticion");
    
    let resp

    try {
    console.log("Buscando...");

    resp = await obtenerUsuarioPromise(id)
    console.log(resp);

    console.log("Termine!");

    } catch (error) {
        console.log("error: ", error);
        
    }
    
    
    return resp
} 

probarAsincronica(3)




async function prueba(){
    try {




        
    } catch (error) {

        
    }

    
}

