// let numero 

// if(numero){
//     console.log("es numero: ", numero);

// }else{
//     console.log("no es numero: ", numero);

// }

let user = {
    nombre: "",
    estado: true,
    materia: 'PWA'
}

// if(user.nombre){
//     console.log("el nombre es: ", user.nombre);

// }else{
//     console.log("no hay informacion");

// }

let edad = 17
let respuesta
if (edad < 18) {
    // console.log("denegado");
    respuesta = "denegado"
} else if (edad < 21) {
    console.log("aceptado con tutor");
    respuesta = "aceptado con tutor"
} else {
    console.log("Licencia Otorgada");
    respuesta = "Licencia Otorgada"

}


// Operador Ternario

let licencia = (edad >= 18) ? "Permitido" : "Denegada"

let licencia2 = (edad < 18) ? "Denegada" : (edad < 21) ? "Permitido con tutor" : "Licencia otorgada"

// console.log(licencia);


// && (AND) ejecutar la derecha, solo si la izquierda es verdadera/positiva

let nombre = ""

// nombre && console.log("Nombre: ", nombre);

// Operador (OR) o tambien expresado como " || "
// devolver el primer valor positivo/verdadero

// let alumno = nombre || "Alumno generico"


let alumno = {
    nombre: nombre,
    edad: 0,
    estudiante: false
}
// console.log(alumno);

// si yo quiero evaluar que tenemos todos los datos, utilizo el &&
if (alumno.nombre && alumno.edad && alumno.estudiante) {
    // console.log(
    //     "Tenemos todos los datos"
    // );
} else {
    // console.log("Nos faltan datos");

}


// si yo quiero evaluar que tenemos al menos uno de los datos, utilizo el ||
if (alumno.nombre || alumno.edad || alumno.estudiante) {
    // console.log(
    //     "al menos un valor es positivo"
    // );
} else {
    // console.log("todos los valores son negativos");

}


// ?? nullish ( si la condicion es null/undefined, ejecuta lo siguiente)

let userInput = ""

let conTernario = userInput ? userInput : "input vacio"
let conNullish = userInput || "sin nombre"

// console.log("con Nullish: ", conNullish);

// let usuario = {
//     nombre: nombre ? nombre : "sin nombre"
// }


// optional chaining (?.), sirve para leer propiedades profundas, sin que rompa


const usuario = {
    nombre: "Facu"
}

console.log(usuario.direccion.calle.altura);

console.log("me fui");

setTimeout(() => {
    console.log("volvi");
    usuario.direccion = {
        calle: {
            altura: 583,
            nombre: "La plata"
        }
    }
    
}, 3000);

setTimeout(() => {
    console.log("termine");
    console.log(usuario.direccion?.calle?.altura);

}, 5000);