const peliculas = [
    {
        nombre: "La la land",
        genero: "Romántica",
        fecha: "2017",
        img: "posters/laLaLand.jpg",
        precio: 15
    },
    {
        nombre: "Hermano Oso",
        genero: "Animación",
        fecha: "2004",
        img: "posters/hermanoOso.jpg",
        precio: 19
    },
    {
        nombre: "Yo antes de ti",
        genero: "Romántica",
        fecha: "2016",
        img: "posters/yoAntesDeTi.jpg",
        precio: 25
    },
    {
        nombre: "A dos metros de ti",
        genero: "Romántica",
        fecha: "2019",
        img: "posters/aDosMetrosDeTi.jpg",
        precio: 12
    },
    {
        nombre: "Titanic",
        genero: "Romántica",
        fecha: "2017",
        img: "posters/titanic.jpg",
        precio: 15
    },
    {
        nombre: "Toy Story",
        genero: "Animación",
        fecha: "1996",
        img: "posters/toyStory.jpg",
        precio: 19
    },
    {
        nombre: "Cars",
        genero: "Animación",
        fecha: "2006",
        img: "posters/cars.jpg",
        precio: 25
    },
    {
        nombre: "Del revés",
        genero: "Animación",
        fecha: "2015",
        img: "posters/delReves.jpg",
        precio: 12
    },
    {
        nombre: "El Rey León",
        genero: "Animación",
        fecha: "1994",
        img: "posters/elReyLeon.jpg",
        precio: 15
    },
    {
        nombre: "Star Trek",
        genero: "Ciencia Ficción",
        fecha: "2009",
        img: "posters/starTrek.jpg",
        precio: 19
    },
    {
        nombre: "Tron: Legacy",
        genero: "Ciencia Ficción",
        fecha: "1982",
        img: "posters/tronLegacy.jpg",
        precio: 25
    },
    {
        nombre: "Harry Potter y la piedra filosofal",
        genero: "Fantasía",
        fecha: "2001",
        img: "posters/harryPotterYLaPiedraFilosofal.jpg",
        precio: 12
    },
    {
        nombre: "Harry Potter y la cámara secreta",
        genero: "Fantasía",
        fecha: "2002",
        img: "posters/harryPotterYLaCamaraSecreta.jpg",
        precio: 15
    },
    {
        nombre: "Harry Potter y el prisionero de Azkaban",
        genero: "Fantasía",
        fecha: "2004",
        img: "posters/harryPotterYElPrisioneroDeAzkaban.jpg",
        precio: 19
    },
    {
        nombre: "Harry Potter y el cáliz de fuego",
        genero: "Fantasía",
        fecha: "2005",
        img: "posters/harryPotterYElCalizDeFuego.jpg",
        precio: 25
    },
    {
        nombre: "Harry Potter y la Orden del Fénix",
        genero: "Fantasía",
        fecha: "2007",
        img: "posters/harryPotterYLaOrdenDelFenix.jpg",
        precio: 12
    },
    {
        nombre: "Harry Potter y el misterio del príncipe",
        genero: "Fantasía",
        fecha: "2009",
        img: "posters/harryPotterYElMisterioDelPrincipe.jpg",
        precio: 15
    },
    {
        nombre: "Harry Potter y las reliquias de la muerte: Parte 1",
        genero: "Fantasía",
        fecha: "2010",
        img: "posters/harryPotterYLasReliquiasDeLaMuerteParte1.jpg",
        precio: 19
    },
    {
        nombre: "Harry Potter y las reliquias de la muerte: Parte 2",
        genero: "Fantasía",
        fecha: "2011",
        img: "posters/harryPotterYLasReliquiasDeLaMuerteParte2.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio IV - Una nueva esperanza",
        genero: "Ciencia Ficción",
        fecha: "1977",
        img: "posters/starWarsEpisodioIVUnaNuevaEsperanza.jpg",
        precio: 12
    },
    {
        nombre: "Star Wars: Episodio V - El imperio contraataca",
        genero: "Ciencia Ficción",
        fecha: "1980",
        img: "posters/starWarsEpisodioVElImperioContraataca.jpg",
        precio: 15
    },
    {
        nombre: "Star Wars: Episodio VI - El regreso del Jedi",
        genero: "Ciencia Ficción",
        fecha: "1983",
        img: "posters/starWarsEpisodioVIElRegresoDelJedi.jpg",
        precio: 19
    },
    {
        nombre: "Star Wars: Episodio I - La amenaza fantasma",
        genero: "Ciencia Ficción",
        fecha: "1999",
        img: "posters/starWarsEpisodioILaAmenazaFantasma.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio II - El ataque de los clones",
        genero: "Ciencia Ficción",
        fecha: "2002",
        img: "posters/starWarsEpisodioIIElAtaqueDeLosClones.jpg",
        precio: 12
    },
    {
        nombre: "Star Wars: Episodio III - La venganza de los Sith",
        genero: "Ciencia Ficción",
        fecha: "2005",
        img: "posters/starWarsEpisodioIIILaVenganzaDeLosSith.jpg",
        precio: 15
    },
    {
        nombre: "Star Wars: Episodio VII - El despertar de la Fuerza",
        genero: "Ciencia Ficción",
        fecha: "2015",
        img: "posters/starWarsEpisodioVIIElDespertarDeLaFuerza.jpg",
        precio: 19
    },
    {
        nombre: "Star Wars: Episodio VIII - Los últimos Jedi",
        genero: "Ciencia Ficción",
        fecha: "2017",
        img: "posters/starWarsEpisodioVIIILosUltimosJedi.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio IX - El ascenso de Skywalker",
        genero: "Ciencia Ficción",
        fecha: "2019",
        img: "posters/starWarsEpisodioIXElAscensoDeSkywalker.jpg",
        precio: 12
    },
    {
        nombre: "Iron Man",
        genero: "Acción",
        fecha: "2008",
        img: "posters/ironMan.jpg",
        precio: 15
    },
    {
        nombre: "El increíble Hulk",
        genero: "Acción",
        fecha: "2008",
        img: "posters/elIncreibleHulk.jpg",
        precio: 19
    },
    {
        nombre: "Iron Man 2",
        genero: "Acción",
        fecha: "2010",
        img: "posters/ironMan2.jpg",
        precio: 25
    },
    {
        nombre: "Thor",
        genero: "Acción",
        fecha: "2011",
        img: "posters/thor.jpg",
        precio: 12
    },
    {
        nombre: "Capitán América: El primer vengador",
        genero: "Acción",
        fecha: "2011",
        img: "posters/capitanAmericaElPrimerVengador.jpg",
        precio: 15
    },
    {
        nombre: "Los Vengadores",
        genero: "Acción",
        fecha: "2012",
        img: "posters/losVengadores.jpg",
        precio: 19
    },
    {
        nombre: "Iron Man 3",
        genero: "Acción",
        fecha: "2013",
        img: "posters/ironMan3.jpg",
        precio: 25
    },
    {
        nombre: "Thor: Un mundo oscuro",
        genero: "Acción",
        fecha: "2013",
        img: "posters/thorUnMundoOscuro.jpg",
        precio: 12
    },
    {
        nombre: "Capitán América y el soldado del invierno",
        genero: "Acción",
        fecha: "2014",
        img: "posters/capitanAmericaYElSoldadoDelInvierno.jpg",
        precio: 15
    },
    {
        nombre: "Guardianes de la galaxia",
        genero: "Acción",
        fecha: "2014",
        img: "posters/guardianesDeLaGalaxia.jpg",
        precio: 19
    },
    {
        nombre: "Vengadores: La era de Ultrón",
        genero: "Acción",
        fecha: "2015",
        img: "posters/vengadoresLaEraDeUltron.jpg",
        precio: 25
    },
    {
        nombre: "Ant-Man",
        genero: "Acción",
        fecha: "2015",
        img: "posters/antMan.jpg",
        precio: 12
    },
    {
        nombre: "Capitán América: Civil War",
        genero: "Acción",
        fecha: "2016",
        img: "posters/capitanAmericaCivilWar.jpg",
        precio: 15
    },
    {
        nombre: "Doctor Strange",
        genero: "Acción",
        fecha: "2016",
        img: "posters/doctorStrange.jpg",
        precio: 19
    },
    {
        nombre: "Guardianes de la galaxia Vol. 2",
        genero: "Acción",
        fecha: "2017",
        img: "posters/guardianesDeLaGalaxiaVol2.jpg",
        precio: 25
    },
    {
        nombre: "Spider-Man: Homecoming",
        genero: "Acción",
        fecha: "2017",
        img: "posters/spiderManHomecoming.jpg",
        precio: 12
    },
    {
        nombre: "Thor: Ragnarok",
        genero: "Acción",
        fecha: "2017",
        img: "posters/thorRagnarok.jpg",
        precio: 15
    },
    {
        nombre: "Black Panther",
        genero: "Acción",
        fecha: "2018",
        img: "posters/blackPanther.jpg",
        precio: 19
    },
    {
        nombre: "Vengadores: Infinity War",
        genero: "Acción",
        fecha: "2018",
        img: "posters/vengadoresInfinityWar.jpg",
        precio: 25
    },
    {
        nombre: "Ant-Man y la Avispa",
        genero: "Acción",
        fecha: "2018",
        img: "posters/antManYLaAvispa.jpg",
        precio: 12
    },
    {
        nombre: "Capitana Marvel",
        genero: "Acción",
        fecha: "2019",
        img: "posters/capitanaMarvel.jpg",
        precio: 15
    },
    {
        nombre: "Vengadores: Endgame",
        genero: "Acción",
        fecha: "2019",
        img: "posters/vengadoresEndgame.jpg",
        precio: 19
    },
    {
        nombre: "Spider-Man: Lejos de casa",
        genero: "Acción",
        fecha: "2019",
        img: "posters/spiderManLejosDeCasa.jpg",
        precio: 25
    },
    {
        nombre: "Black Widow",
        genero: "Acción",
        fecha: "2021",
        img: "posters/blackWidow.jpg",
        precio: 12
    },
    {
        nombre: "Shang-Chi y la leyenda de los Diez Anillos",
        genero: "Acción",
        fecha: "2021",
        img: "posters/shangChiYLaLeyendaDeLosDiezAnillos.jpg",
        precio: 15
    },
    {
        nombre: "Eternals",
        genero: "Acción",
        fecha: "2021",
        img: "posters/eternals.jpg",
        precio: 19
    },
    {
        nombre: "Spider-Man: Sin camino a casa",
        genero: "Acción",
        fecha: "2021",
        img: "posters/spiderManSinCaminoACasa.jpg",
        precio: 25
    },
    {
        nombre: "Doctor Strange en el multiverso de la locura",
        genero: "Acción",
        fecha: "2022",
        img: "posters/doctorStrangeEnElMultiversoDeLaLocura.jpg",
        precio: 12
    },
    {
        nombre: "Thor: Amor y trueno",
        genero: "Acción",
        fecha: "2022",
        img: "posters/thorAmorYTrueno.jpg",
        precio: 15
    },
    {
        nombre: "Black Panther: Wakanda Forever",
        genero: "Acción",
        fecha: "2022",
        img: "posters/blackPantherWakandaForever.jpg",
        precio: 19
    },
    {
        nombre: "Ant-Man y la Avispa: Quantumania",
        genero: "Acción",
        fecha: "2023",
        img: "posters/antManYLaAvispaQuantumania.jpg",
        precio: 25
    },
    {
        nombre: "Guardianes de la galaxia Vol. 3",
        genero: "Acción",
        fecha: "2023",
        img: "posters/guardianesDeLaGalaxiaVol3.jpg",
        precio: 12
    },
    {
        nombre: "The Marvels",
        genero: "Acción",
        fecha: "2023",
        img: "posters/theMarvels.jpg",
        precio: 15
    }
];
