
// Calcula el valor total del carrito de compras

const carrito = [
    {
        nombreProducto: "Carne",
        cantidad: 1,
        precio: 10000
    },
    {
        nombreProducto: "Fideos",
        cantidad: 3,
        precio: 2000
    },
    {
        nombreProducto: "Salsa",
        cantidad: 4,
        precio: 800
    }
]

let totalCarrito = carrito.reduce(function(acumulador, producto){

    console.log("La " + producto.nombreProducto + " costo : $", producto.cantidad * producto.precio);

    return producto.cantidad * producto.precio + acumulador
}, 0)

let cantidadProductos = carrito.reduce(function(acumulador, producto){

    // console.log("La " + producto.nombreProducto + " costo : $", producto.cantidad * producto.precio);

    return producto.cantidad + acumulador
}, 0)




console.log("totalCarrito: ", totalCarrito);
console.log("cantidad de Productos: ", cantidadProductos);
