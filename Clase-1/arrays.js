// Metodos de Arrays

let frutas = ["Uva", "Manzana", "Banana"]
// console.log(frutas);

// Agregar un elemento al final del array

// metodo push
frutas.push("Tomate")

// console.log(frutas);

// Eliminar el ultimo elemento:


let eliminado = frutas.pop()

// console.log(eliminado);


// console.log(frutas);


// Metodo: Shift
// Elimina el primer elemento del array


let eliminado2 = frutas.shift()

// console.log(eliminado2);

// console.log(frutas);


// Metodo: Unshift

// Agrega un elemento, al comienzo del array

frutas.unshift("Morron")
// console.log(frutas);



// Metodo para recorrer un array:
// ForEach

frutas.forEach(function(fruta){
    // console.log("Fruta ForEach: ", fruta);
    
})


// Map VS ForEach
// Map ademas de recorrer un array, devuelve un nuevo array


let resultado = frutas.map(function(fruta){
    // console.log("Fruta Map: ", fruta);
    


    return {
        nombre: fruta,
        stock: 10
    }
})


// console.log("Resultado: ",resultado);


let numeros = [ 2, 7, 14, 21, 18, 19]

// metodo Filter
// genera un nuevo array, a partir de el filtrado del original


// console.log("numeros: ", numeros);


let filtrado = numeros.filter(function(number){

    return number < 8
})

// console.log("filtrado: ", filtrado);



// Metodo Find
// devuelve el primer elmento, que cumple con la condicion

let encontrado = numeros.find(function(number){

    return number > 8
})

// console.log("encontrado: ", encontrado);

// metodo Some
// si alguno cumple con la condicion, retorna true

let hayMayores = numeros.some(function(number){

    return number > 20
})

// console.log("hayMayores: ", hayMayores);




// Metodo Every
// si todos cumplen con la condicion, retorna true

let todosMenores = numeros.every(function(number){

    return number > 2
})

// console.log("todosMenores: ", todosMenores);




// Split
// nos separa un string, en un array segun el separador

let nombre = "Educacion"

// console.log(nombre);
let split = nombre.split("")



// metodo reverse
// da vuelta un array
// console.log("split: ", split);
// console.log("split reverse: ", split.reverse());

let dadoVuelta = split.reverse()

// console.log(numeros);
// console.log(numeros.reverse());


// Metodo Join

let numerosUnidos = numeros.join("")

let palabraUnida = dadoVuelta.join("")

// console.log("numerosUnidos: ", numerosUnidos);

// console.log("palabraUnida: ", palabraUnida);

// Metodo Reduce:
// utiliza un acumulador

numeros = [ 2, 7, 14, 21, 18, 19, 1 ]


let sumaTotal = numeros.reduce(function(acumulador, number){

    return acumulador + number
})

console.log("suma total: ", sumaTotal);


const alumnos = [
    {
        nombreMateria: "PWA",
        cantidad: 3
    },
    {
        nombreMateria: "Programacion 1",
        cantidad: 8
    },
    {
        nombreMateria: "Programacion 2",
        cantidad: 5
    }
]

let cantidadAlumnos = alumnos.reduce(function(accumulador, alumno){

    // console.log("accumulador: ", accumulador);
    

    // console.log(alumno.cantidad);
    
    return accumulador + alumno.cantidad

   
}, 0)

console.log(cantidadAlumnos);






