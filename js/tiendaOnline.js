let carrito = [];

// Función para agregar una planta al carrito
function agregarAlCarrito(planta) {

    const productoEnCarrito = carrito.find(item => item.nombre === planta.nombre);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        planta.cantidad = 1;
        carrito.push(planta);
    }
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.createElement('li');
    listaCarrito.innerHTML = '';


    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li>El carrito está vacío.</li>';
        console.log("El carrito está vacío");
    } else {
        carrito.forEach((planta, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${planta.nombre} - ${planta.precio} € x ${planta.cantidad}
                <button class="btn-menos" data-index="${index}">-</button>
                <button class="btn-mas" data-index="${index}">+</button>
            `;
            listaCarrito.appendChild(li);
        });

        // total carrito
        const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        totalCarrito.textContent = `Total: ${total.toFixed(2)} €`;
        listaCarrito.appendChild(totalCarrito);
    }

    // botones + -
    document.querySelectorAll('.btn-menos').forEach(button => {
        button.addEventListener('click', disminuirCantidad);
    });
    document.querySelectorAll('.btn-mas').forEach(button => {
        button.addEventListener('click', aumentarCantidad);
    });
}

function disminuirCantidad(event) {
    const index = event.target.dataset.index;
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    actualizarCarrito();
}

function aumentarCantidad(event) {
    const index = event.target.dataset.index;
    carrito[index].cantidad++;
    actualizarCarrito();
}

// Mostrar u ocultar el carrito
document.querySelector('.fa-cart-shopping').addEventListener('click', () => {
    const carritoElement = document.querySelector('.carrito');
    carritoElement.classList.toggle('carrito-visible');//MOSTRAR
    carritoElement.classList.toggle('carrito-oculto');//OCULTAR
    console.log(carritoElement.classList.contains('carrito-visible') ? 'Carrito visible' : 'Carrito oculto');

});
document.getElementById('cerrar-carrito').addEventListener('click', () => {
    const carritoElement = document.querySelector('.carrito');
    carritoElement.classList.remove('carrito-visible');
    carritoElement.classList.add('carrito-oculto');
    console.log('Carrito oculto');
});


// Función para pintar las plantas en la página principal
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
        agregarAlCarrito(planta); // Agrega la planta al carrito
        console.log(`Se agregó ${planta.nombre} al carrito`);
    });

    h2.textContent = planta.nombre;
    img.src = planta.imagen;
    pDescripcion.textContent = planta.pDescripcion;
    pCategoria.textContent = `Tipo de planta: ${planta.tipoPlanta}`;
    liPrecio.textContent = `Precio: ${planta.precio} €`;
    ul.appendChild(liPrecio);
    article.append(h2, img, pDescripcion, pCategoria, ul, btnAgregarCarrito);

    const contenedor = document.getElementById('plantas');
    contenedor.appendChild(article);
}

// Función para pintar todas las plantas
function pintarTodasLasPlantas() {
    plantas.forEach(planta => {
        pintarPlanta(planta);
    });
}

// Función para filtrar las plantas 
function filtrarPlantas(tipo) {
    const contenedor = document.getElementById('plantas');
    contenedor.innerHTML = '';

    const plantasFiltradas = plantas.filter(planta => planta.tipoPlanta === tipo || tipo === 'Todas');
    plantasFiltradas.forEach(planta => pintarPlanta(planta));
}

document.getElementById('btn-tipo-todas').addEventListener('click', () => filtrarPlantas('Todas'));
document.getElementById('btn-tipo-interior').addEventListener('click', () => filtrarPlantas('Interior'));
document.getElementById('btn-tipo-exterior').addEventListener('click', () => filtrarPlantas('Exterior'));

pintarTodasLasPlantas();























