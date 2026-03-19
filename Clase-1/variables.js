// Tenemos 3 formas de declarar una variable

// let, const y var

// var puede reasignarse, y puede redeclararse
// var no se recomienda en codigo moderno

var nombre = "matias"

nombre = 28

// let tambien puede reasignar, pero no puede redeclararse

let apellido = "perez"


function saludo() {
    let apellido = "gonzalez"

    if (true) {
        let apellido = "duro"

    }

}

// const no se puede reasignar, ni redeclarar, en el mismo scope




