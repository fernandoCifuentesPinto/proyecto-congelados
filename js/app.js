const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Wagyu",
        precio: 8000,
        imagen: "img/hamburguesa-wagyu.jpeg"
    },
    {
        id: 2,
        nombre: "Jamón Pierna",
        precio: 1000,
        imagen: "img/jamon-pierna.jpeg"
    }
];
// Seleccionamos la sección del catálogo en el HTML
const catalogo = document.querySelector(".catalogo");
console.log(catalogo);
//Recorremos el array para acceder a los productos
productos.forEach((producto) => {
    catalogo.innerHTML +=
    `<article class = "producto">
        <h2>${producto.nombre}</h2>
        <img src = "${producto.imagen}" alt = "${producto.nombre}">
        <p>$${producto.precio.toLocaleString("es-CL")}</p>
        <button>Agregar al carrito</button>
    </article>`
})


