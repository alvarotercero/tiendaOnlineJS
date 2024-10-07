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
    h4precio.textContent = `Precio: ${videogame.precio}€`;

    // Añadimos los elementos al article
    article.append(img, h3, h4plataforma, pdescripcion, pdesarrollador, h4precio);

    return article;
}

const videogamesSection = document.querySelector('section.videogames');
const article = printVideogame(products[0]);
videogamesSection.appendChild(article);

const article2 = printVideogame(products[1]);
videogamesSection.appendChild(article2);