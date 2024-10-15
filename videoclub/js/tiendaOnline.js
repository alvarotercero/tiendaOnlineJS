const sectionPeliculas = document.getElementById('sectionPeliculas');
const sectionCarrito = document.getElementById('sectionCarrito');
const btnCarrito = document.getElementById('btnCarrito');
let carrito = [];

pintarPeliculas(peliculas, sectionPeliculas);

btnCarrito.addEventListener('click', () => {
    sectionCarrito.classList.toggle('visible');
});

function pintarPelicula(pelicula) {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const pFecha = document.createElement('p');
    const pGenero = document.createElement('p');
    const h3Precio = document.createElement('h3');
    const button = document.createElement('button');

    img.src = pelicula.img;
    h2.textContent = pelicula.nombre;
    pFecha.textContent = pelicula.fecha;
    pGenero.textContent = pelicula.genero;
    h3Precio.textContent = `${pelicula.precio}€`;
    button.textContent = 'Añadir al carrito';
    button.className = 'btnAñadir';

    button.addEventListener('click', manejarClick);

    article.append(img, h2, pFecha, pGenero, h3Precio, button);

    return article;
}

function pintarPeliculas(lista, domElement) {
    for (let pelicula of lista) {
        const article = pintarPelicula(pelicula);
        domElement.append(article);
    }
}

function manejarClick(event) {
    const peliculaElement = event.target.closest('article');
    const peliculaNombre = peliculaElement.querySelector('h2').textContent;
    const peliculaImg = peliculaElement.querySelector('img').src;
    const peliculaPrecio = parseFloat(peliculaElement.querySelector('h3').textContent);
    const peliculaExistente = carrito.find(pelicula => pelicula.nombre === peliculaNombre);

    if (peliculaExistente) {
        peliculaExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: peliculaNombre, img: peliculaImg, precio: peliculaPrecio, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    sectionCarrito.innerHTML = '<h1>Carrito de compra</h1>';

    const productosDiv = document.createElement('div');
    const totalDiv = document.createElement('div');
    const pagarBtn = document.createElement('button')

    let total = 0;

    for (const pelicula of carrito) {
        const p = document.createElement('div');
        const img = document.createElement('img');
        const textoPelicula = document.createElement('span');
        const btnEliminar = document.createElement('button');

        p.className = 'producto';
        img.src = pelicula.img;
        img.alt = pelicula.nombre;
        img.style.width = '50px';
        textoPelicula.textContent = `${pelicula.nombre} (x${pelicula.cantidad})`;
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => eliminarPelicula(pelicula.nombre));

        p.appendChild(img);
        p.appendChild(textoPelicula);
        p.appendChild(btnEliminar);

        productosDiv.appendChild(p);

        total += pelicula.precio * pelicula.cantidad;
    }
    pagarBtn.textContent = 'Pagar ahora'
    pagarBtn.className = 'pagar'
    productosDiv.className = 'productos';
    totalDiv.className = 'total';
    totalDiv.textContent = `Total: ${total}€`;

    sectionCarrito.append(productosDiv, totalDiv, pagarBtn);

    if (carrito.length > 0) {
        sectionCarrito.classList.add('visible');
    } else {
        sectionCarrito.classList.remove('visible');
    }

    pagarBtn.addEventListener('click', () => {
        alert('No es posible realizar la compra en este momento');
    });
}

function eliminarPelicula(nombre) {
    carrito = carrito.filter(pelicula => pelicula.nombre !== nombre);
    actualizarCarrito();
}