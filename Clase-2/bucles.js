

let numeros = [5, 6, 29, 10, 7]

// For clasico (cuando sabes cuanto va a durar)
for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    // console.log(element);
    
}

// for each (recorre un array)
numeros.forEach(element => {
    // console.log(element);
    
})

// While: ()
// se va a ejecutar, siempre que la condicion se cumpla

let n = 20

while(n < 10){
    // console.log("N es: ", n);
    // n = n +1
}

// do... while (se ejecuta al menos, una vez)

do{
    console.log("N es: ", n);
    // n = n + 1
} while(n < 10)


// FOR...OF (sirve para recorrer arrays o strings)

let frutas = ["manzana", "pera", "durazno"]

for (const fruta of frutas) {
    // console.log("fruta: ", fruta);

}

// FOR...IN (sirve para recorrer objetos)

let persona = {
    nombre: "facu",
    edad: 20,
    estado: true,
    materias: "PWA"
}

for (const key in persona) {

    if (!Object.hasOwn(persona, key)) continue;

    
    console.log("key: ", key);
    
    const valor = persona[key];
    
    console.log("valor: ", valor);

}

