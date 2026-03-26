// Objetos

// el array tiene indices vs el objeto que tiene llaves

const nombre = 'Matias'

const familia = {
    cantidad: 4,
    padre: {
        nombre,
        edad: 30
    },
    madre: {
        nombre: "Mar",
        edad: 30
    }
}

let rol = "cliente"

const usuario = {
    nombre: "Facu",
    edad: 15,
    activo: true,
    hablar: () => "hola",
    familia,
    aprobados: null,
    presentar(){
        return `Soy ${this.nombre}, tengo ${this.edad}`
    },
   "sistema operativo": "Windows",
   [rol]: null
}

console.log(usuario);
