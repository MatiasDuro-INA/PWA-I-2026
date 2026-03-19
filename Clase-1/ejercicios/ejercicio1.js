

// En una funcion, devolver un array con las palabras Palindromas

function esPalindromo(palabras){

    let palindromos = []

    palabras.forEach(palabra => {

        
        // console.log(palabra.split("").reverse().join(""));

        let palabraMinuscula = palabra.toLowerCase()

        let palabraInvertida = palabraMinuscula.split("").reverse().join("")

        // let palabraArray = palabraMinuscula.split("")

        // let palabraInvertida = palabraArray.reverse()

        // let palabraInvertidaUnida = palabraInvertida.join("")

        console.log("Es igual " + palabraMinuscula + " que " + palabraInvertida, palabraMinuscula == palabraInvertida);
        
        if(palabraMinuscula == palabraInvertida){
            palindromos.push(palabra)
        }
    });

    return palindromos
}




const palabras = ["Oso","Casa", "Menem", "Teclado", "Reconocer", "Ana", "Neuquen", "Saludo"]

let respuesta = esPalindromo(palabras)

console.log("respuesta: ", respuesta);
