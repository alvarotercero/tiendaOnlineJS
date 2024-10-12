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
    h4precio.classList.add('price')
    h4precio.textContent = `Precio: ${videogame.precio}€`;

    // Creación de botón de compra
    const divbutton = document.createElement('div');
    divbutton.classList.add('button');
    divbutton.textContent = 'Comprar';

    if (videogame.stock > 0) {
        // Evento para añadir el producto al carrito pulsando el botón
        divbutton.addEventListener('click', () => {
            arrayCart.push(videogame);
            updateCart(arrayCart);
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

function updateCart(listCart) {
    if (listCart.length > 0) {
        h4Cart.innerHTML = '';
        formProducts.innerHTML = '';
        // Lista adicional para comprobar si ya existe
        const aditionalArray = [];

        for (let videogame of listCart) {
            // Si no existe, añadimos el elemento
            if (!aditionalArray.includes(videogame)) {
                const divProduct = document.createElement('div');

                const labelTitle = document.createElement('label');
                labelTitle.htmlFor = `formTitle${videogame.id}`;
                labelTitle.textContent = videogame.titulo;

                const inputNumber = document.createElement('input');
                inputNumber.type = 'number';
                inputNumber.min = '0';
                // Como máximo se puede comprar todo el stock
                inputNumber.max = `${videogame.stock}`;
                inputNumber.id = `formTitle${videogame.id}`;
                inputNumber.value = '1';
                inputNumber.classList.add('formTitle');

                divProduct.append(labelTitle, inputNumber);
                formProducts.append(divProduct);

                aditionalArray.push(videogame);
            } else {
                // Si existe, aumentamos en uno su número en el carrito
                const existingVideogame = document.getElementById(`formTitle${videogame.id}`);
                // Comprobamos que dispongamos de stock
                let currentValue = Number(existingVideogame.value);
                if (currentValue < videogame.stock) {
                    currentValue += 1;
                    existingVideogame.value = currentValue;
                }
            }
        }
    }
}

const videogamesSection = document.querySelector('section.videogames');
const divCart = document.querySelector('.cartShopping div');
const h4Cart = document.getElementById('cartElement');
const formProducts = document.getElementById('formProducts');

const arrayCart = [];

printVideogames(products, videogamesSection);
