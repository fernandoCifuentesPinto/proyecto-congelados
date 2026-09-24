const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Wagyu",
        precio: 8000,
        imagen: "img/hamburguesa.wagyu.jpeg"
    },
    {
        id: 2,
        nombre: "Jamón Pierna",
        precio: 1000
    }
];
// Seleccionamos la sección del catálogo en el HTML
const catalogo = document.querySelector(".catalogo");
console.log(catalogo);
//Recorremos el array para acceder a los productos
productos.forEach((producto) => {
    console.log(producto.nombre, producto.precio)
})

