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
    divbutton.addEventListener('click', () => {
        arrayCart.push(videogame);
    })

    // Añadimos los elementos al article
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

const videogamesSection = document.querySelector('section.videogames');
const arrayCart = [];
// const article = printVideogame(products[0]);
// videogamesSection.appendChild(article);

// const article2 = printVideogame(products[1]);
// videogamesSection.appendChild(article2);
printVideogames(products, videogamesSection);
