function printVideogame(videogame) {
    // Creación de article que contendrá los elementos
    const article = document.createElement('article');

    // Creación de img para imagen
    const img = document.createElement('img');
    img.src = videogame.imagen;

    // Creación de h3 para título
    const h3 = document.createElement('h3');
    h3.textContent = videogame.titulo;

    // Creación de h4 para plataforma
    const h4plataforma = document.createElement('h4');
    h4plataforma.textContent = videogame.plataforma;

    // Creación de p para descripción
    const pdescripcion = document.createElement('p');
    pdescripcion.textContent = videogame.descripcion;

    // Creación de p para desarrollador
    const pdesarrollador = document.createElement('p');
    pdesarrollador.textContent = videogame.desarrollador;

    // Creación de h4 para precio
    const h4precio = document.createElement('h4');
    h4precio.classList.add('price');
    h4precio.textContent = `Precio: ${videogame.precio}€`;

    // Creación de botón de compra
    const divbutton = document.createElement('div');
    divbutton.classList.add('button');
    divbutton.textContent = 'Comprar';

    if (videogame.stock > 0) {
        // Evento para añadir el producto al carrito pulsando el botón
        divbutton.addEventListener('click', () => {
            addProductToCart(videogame);
        });
    } else {
        // Si no hay stock, deshabilitamos el botón
        divbutton.classList.add('disabled');
        divbutton.textContent = 'Producto agotado';
    }

    // Añadimos todos los elementos al article
    article.append(img, h3, h4plataforma, pdescripcion, pdesarrollador, h4precio, divbutton);

    return article;
}

function printVideogames(list, domElement) {
    domElement.innerHTML = '';
    for (let videogame of list) {
        const article = printVideogame(videogame);
        domElement.appendChild(article);
    }
}

function addProductToCart(videogame) {
    // Hacemos visible el carrito
    cartShopping.classList.add('visible');
    
    // Si el producto ya está en el carrito, actualizamos la cantidad y el precio
    const existingProduct = arrayCart.find(item => item.id === videogame.id);

    if (existingProduct) {
        // Comprobamos que no supere el stock disponible
        if (existingProduct.quantity < videogame.stock) {
            existingProduct.quantity += 1;
            updateCart(arrayCart);
        } else {
            alert(`En estos momentos no disponemos de suficiente stock. 
                    Disculpe las molestias.`);
        }
    } else {
        // Si no está en el carrito, lo añadimos con una cantidad inicial de 1
        videogame.quantity = 1;
        arrayCart.push(videogame);
        updateCart(arrayCart);
    }
}

function updateCart(listCart) {
    h4Cart.innerHTML = '';
    cartProducts.innerHTML = '';
    let newTotalPrice = 0;

    for (let videogame of listCart) {
        const divProduct = document.createElement('div');
        divProduct.classList.add('divProduct');

        const h4Title = document.createElement('h4');
        h4Title.textContent = videogame.titulo;

        const divNumber = document.createElement('div');
        const pNumber = document.createElement('p');
        pNumber.textContent = videogame.quantity;
        pNumber.id = `pNumber${videogame.id}`;
        divNumber.appendChild(pNumber);
        divNumber.classList.add('divNumber');
        
        // Botones para cambiar la cantidad en el carrito
        const divButtons = document.createElement('div');
        divButtons.classList.add('divButtons');
        const divPlus = document.createElement('div');
        divPlus.textContent = '+';
        divPlus.id = `divPlus${videogame.id}`;
        divPlus.addEventListener('click', () => {
            if (videogame.quantity < videogame.stock) {
                videogame.quantity += 1;
                updateCart(listCart);
            } else {
                alert(`En estos momentos no disponemos de suficiente stock. 
                    Disculpe las molestias.`);
            }
        });

        const divMinus = document.createElement('div');
        divMinus.textContent = '-';
        divMinus.id = `divMinus${videogame.id}`;
        divMinus.addEventListener('click', () => {
            if (videogame.quantity > 1) {
                videogame.quantity -= 1;
                updateCart(listCart);
            } else {
                if (confirm('¿Desea eliminar el producto del carro de compra?')) {
                    const index = listCart.findIndex(item => item.id === videogame.id);
                    if (index !== -1) {
                        listCart.splice(index, 1);
                        updateCart(listCart);
                    }
                }
            }
        })
        divButtons.append(divPlus, divMinus);

        const productPrice = document.createElement('p');
        productPrice.classList.add('pPrice');
        productPrice.textContent = `Precio/u: ${videogame.precio} €`;

        divProduct.append(h4Title, divNumber, productPrice, divButtons);
        cartProducts.append(divProduct);
        
        // Recalculamos el total sumando el precio por la cantidad
        newTotalPrice += videogame.precio * videogame.quantity;
    }
    // Redondeamos para tener dos decimales
    totalPrice = newTotalPrice.toFixed(2);
    pTotal.textContent = `Total: ${totalPrice} €`;
}

const videogamesSection = document.querySelector('section.videogames');
const cartShopping = document.querySelector('.cartShopping');
const cartIcon = document.querySelector('.fa-cart-shopping');
const divCart = document.querySelector('.cartShopping div');
const h4Cart = document.getElementById('cartElement');
const cartProducts = document.getElementById('cartProducts');
const pTotal = document.getElementById('pTotal');
const closeButton = document.querySelector('.close');
let totalPrice = 0;

const arrayCart = [];

printVideogames(products, videogamesSection);

// Eventos para hacer visible o esconder el carro de compra
cartIcon.addEventListener('click', () => {
    if (cartShopping.classList.contains('visible')) {
        cartShopping.classList.remove('visible');
    } else {
        cartShopping.classList.add('visible');
    }
});

closeButton.addEventListener('click', () => {
    if (cartShopping.classList.contains('visible')) {
        cartShopping.classList.remove('visible');
    } else {
        cartShopping.classList.add('visible');
    }
});
