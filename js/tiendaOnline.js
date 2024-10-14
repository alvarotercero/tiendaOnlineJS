
let carrito = []; // Arreglo para almacenar los artículos en el carrito

// Función para agregar una planta al carrito
function agregarAlCarrito(planta) {
    carrito.push(planta);
    actualizarCarrito(); // Actualiza la vista del carrito después de agregar un producto
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista antes de actualizar

    // Verificar si el carrito tiene elementos
    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li>El carrito está vacío.</li>';
        console.log("El carrito está vacío");
    } else {
        carrito.forEach(planta => {
            const li = document.createElement('li');
            li.textContent = `${planta.nombre} - ${planta.precio} €`;
            listaCarrito.appendChild(li);
            console.log(`Agregado al carrito: ${planta.nombre} - ${planta.precio} €`); // Agregado para depuración
        });
    }
}

// Mostrar u ocultar el carrito
document.querySelector('.fa-cart-shopping').addEventListener('click', () => {

    const carritoElement = document.getElementById('carrito');
    carritoElement.style.left = '0'; // Fuerza el carrito a mostrarse
    console.log('Carrito visible');
});
//     carritoElement.classList.toggle('carrito-visible');
//     console.log(carritoElement.classList.contains('carrito-visible') ? 'Carrito visible' : 'Carrito oculto');
// });





//mio//

function pintarPlanta(planta) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const pDescripcion = document.createElement('p');
    const pCategoria = document.createElement('p');
    const ul = document.createElement('ul');
    const liPrecio = document.createElement('li');

    const btnAgregarCarrito = document.createElement('button');
    btnAgregarCarrito.textContent = "Agregar al carrito";
    btnAgregarCarrito.classList.add('btn-agregar');

    btnAgregarCarrito.addEventListener('click', () => {
        agregarAlCarrito(planta); // Agrega la planta al carrito chat gpt
        console.log(`Se agregó ${planta.nombre} al carrito`);
    });

    h2.textContent = planta.nombre;
    img.src = planta.imagen;
    pDescripcion.textContent = planta.pDescripcion;
    pCategoria.textContent = ` Tipo de planta: ${planta.tipoPlanta}`;
    liPrecio.textContent = `Precio: ${planta.precio} €`;
    ul.appendChild(liPrecio);
    article.append(h2, img, pDescripcion, pCategoria, ul, btnAgregarCarrito);


    const contenedor = document.getElementById('plantas');
    if (contenedor) {
        contenedor.appendChild(article);
    } else {
        console.error("error en 'plantas'");
    }
}

const plantaEjemplo = {
    nombre: "Aloe Vera",
    imagen: "imagenes/aloe-vera.jpg",
    pDescripcion: "Planta suculenta conocida por sus propiedades medicinales. ",
    tipoPlanta: "Interior",
    precio: 8.99,
};



function pintarTodasLasPlantas() {
    plantas.forEach(planta => {
        pintarPlanta(planta);
    });
}

pintarTodasLasPlantas();

// pintar las plantas segun filtros
function filtrarPlantas(tipo) {
    const contenedor = document.getElementById('plantas');
    contenedor.innerHTML = '';

    const plantasFiltradas = plantas.filter(planta => planta.tipoPlanta === tipo || tipo === 'Todas');
    plantasFiltradas.forEach(planta => pintarPlanta(planta));
}

document.getElementById('btn-tipo-todas').addEventListener('click', () => filtrarPlantas('Todas'));
document.getElementById('btn-tipo-interior').addEventListener('click', () => filtrarPlantas('Interior'));
document.getElementById('btn-tipo-exterior').addEventListener('click', () => filtrarPlantas('Exterior'));

