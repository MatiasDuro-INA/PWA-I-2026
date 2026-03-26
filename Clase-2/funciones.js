console.log(nombre);

var nombre = "Aye"



// 1- funcion declarada
// se puede llamar antes de su defincion, al igual que var
// utilizo un principio llamado hoisting


// console.log(saludo(nombre));

function saludo(nombre){
    return 'hola ' + nombre
}


// console.log(despedir(nombre));


// funcion expresada
// no podes llamarla antes de declararla
const despedir = function(nombre){

    return "Adios " + nombre
}

// console.log(despedir(nombre));


// funcion flecha ( arrow function)
// tiene una sintaxis mas corta, se puede hacer en una sola linea
// y en ese caso, el return es implicito

// const despedir = function(nombre){

//     return "Adios " + nombre
// }

const despedir2 = (nombre) => "Despedida " + nombre

console.log(despedir2(nombre));
