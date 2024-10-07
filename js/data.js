const products = [
  {
    id: 1,
    titulo: "The Last of Us Part II",
    plataforma: "PlayStation 4",
    descripcion: "Una desgarradora historia de venganza, supervivencia y pérdida, ambientada en un mundo postapocalíptico donde Ellie se enfrenta a enemigos tanto humanos como infectados en su lucha por justicia.",
    desarrollador: "Naughty Dog",
    precio: 59.99,
    stock: 25,
    imagen: "../images/thelastofus2.jpg"
  },
  {
    id: 2,
    titulo: "Cyberpunk 2077",
    plataforma: "PC",
    descripcion: "Un RPG de mundo abierto ambientado en Night City, una metrópolis futurista donde el jugador asume el papel de V, un mercenario en busca de un implante único que podría otorgarle la inmortalidad.",
    desarrollador: "CD Projekt Red",
    precio: 49.99,
    stock: 40,
    imagen: "../images/cyberpunk2077.jpg"
  },
  {
    id: 3,
    titulo: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    descripcion: "Una épica aventura de exploración en un vasto mundo abierto, donde el jugador controla a Link mientras lucha por liberar el reino de Hyrule de las garras de Ganon, usando una variedad de armas, herramientas y habilidades.",
    desarrollador: "Nintendo",
    precio: 59.99,
    stock: 60,
    imagen: ""
  },
  {
    id: 4,
    titulo: "Halo Infinite",
    plataforma: "Xbox Series X",
    descripcion: "La nueva entrega de la legendaria franquicia Halo, con el Jefe Maestro enfrentándose a un enemigo implacable en un vasto anillo Halo. Incluye un modo de campaña envolvente y un multijugador renovado.",
    desarrollador: "343 Industries",
    precio: 59.99,
    stock: 35,
    imagen: ""
  },
  {
    id: 5,
    titulo: "Red Dead Redemption 2",
    plataforma: "PlayStation 4",
    descripcion: "Una experiencia de mundo abierto donde el jugador vive la vida de un forajido en el Viejo Oeste, enfrentándose a decisiones morales complejas mientras intenta sobrevivir en un mundo en decadencia.",
    desarrollador: "Rockstar Games",
    precio: 39.99,
    stock: 45,
    imagen: ""
  },
  {
    id: 6,
    titulo: "God of War Ragnarök",
    plataforma: "PlayStation 5",
    descripcion: "Kratos y su hijo Atreus se embarcan en una nueva aventura en la mitología nórdica, enfrentándose a dioses y monstruos mientras tratan de evitar el apocalíptico Ragnarök.",
    desarrollador: "Santa Monica Studio",
    precio: 69.99,
    stock: 30,
    imagen: ""
  },
  {
    id: 7,
    titulo: "Animal Crossing: New Horizons",
    plataforma: "Nintendo Switch",
    descripcion: "Un encantador simulador de vida en una isla donde los jugadores personalizan su hogar, construyen comunidades y se relacionan con adorables personajes animales.",
    desarrollador: "Nintendo",
    precio: 59.99,
    stock: 70,
    imagen: ""
  },
  {
    id: 8,
    titulo: "Genshin Impact",
    plataforma: "PC",
    descripcion: "Un RPG de acción en un mundo abierto inspirado en la mitología asiática, donde los jugadores controlan a varios personajes con habilidades elementales únicas mientras exploran el vasto reino de Teyvat.",
    desarrollador: "miHoYo",
    precio: 0.00,  // Juego free-to-play
    stock: 100,
    imagen: ""
  },
  {
    id: 9,
    titulo: "Call of Duty: Modern Warfare II",
    plataforma: "PlayStation 5",
    descripcion: "Una reinvención del clásico título de la serie Call of Duty, con intensos combates tácticos y un multijugador competitivo en campos de batalla modernos.",
    desarrollador: "Infinity Ward",
    precio: 69.99,
    stock: 50,
    imagen: ""
  },
  {
    id: 10,
    titulo: "FIFA 24",
    plataforma: "Xbox Series X",
    descripcion: "El simulador de fútbol más popular del mundo, con gráficos realistas, nuevas mecánicas de juego y modos en línea que te permiten jugar con los mejores equipos y jugadores del mundo.",
    desarrollador: "EA Sports",
    precio: 59.99,
    stock: 80,
    imagen: ""
  },
  {
    id: 11,
    titulo: "Spider-Man: Miles Morales",
    plataforma: "PlayStation 5",
    descripcion: "Controla a Miles Morales en esta aventura de acción en un mundo abierto mientras protege Nueva York de una nueva amenaza, combinando sus habilidades únicas con las de Spider-Man.",
    desarrollador: "Insomniac Games",
    precio: 49.99,
    stock: 65,
    imagen: ""
  },
  {
    id: 12,
    titulo: "Forza Horizon 5",
    plataforma: "Xbox Series X",
    descripcion: "Un emocionante juego de carreras en mundo abierto ambientado en los hermosos paisajes de México, donde los jugadores pueden competir en una variedad de eventos y explorar libremente.",
    desarrollador: "Playground Games",
    precio: 59.99,
    stock: 90,
    imagen: ""
  },
  {
    id: 13,
    titulo: "Resident Evil Village",
    plataforma: "PlayStation 5",
    descripcion: "Una experiencia de terror de supervivencia en primera persona que sigue a Ethan Winters mientras intenta rescatar a su hija de un misterioso pueblo lleno de criaturas aterradoras.",
    desarrollador: "Capcom",
    precio: 59.99,
    stock: 55,
    imagen: ""
  },
  {
    id: 14,
    titulo: "Ghost of Tsushima",
    plataforma: "PlayStation 4",
    descripcion: "Un juego de acción y aventura ambientado en el Japón feudal, donde el samurái Jin Sakai debe luchar contra la invasión mongola usando tanto su espada como el sigilo.",
    desarrollador: "Sucker Punch Productions",
    precio: 49.99,
    stock: 35,
    imagen: ""
  },
  {
    id: 15,
    titulo: "Minecraft",
    plataforma: "PC",
    descripcion: "Un juego de construcción de mundos y supervivencia en el que los jugadores pueden explorar, recolectar recursos, crear estructuras y enfrentarse a criaturas en un vasto mundo generado por procedimientos.",
    desarrollador: "Mojang Studios",
    precio: 29.99,
    stock: 100,
    imagen: ""
  },
  {
    id: 16,
    titulo: "Elden Ring",
    plataforma: "PlayStation 5",
    descripcion: "Un ambicioso juego de acción RPG en un vasto mundo abierto creado por FromSoftware, con combates desafiantes y una narrativa inmersiva coescrita por George R. R. Martin.",
    desarrollador: "FromSoftware",
    precio: 59.99,
    stock: 20,
    imagen: ""
  },
  {
    id: 17,
    titulo: "Assassin's Creed Valhalla",
    plataforma: "PC",
    descripcion: "Un juego de acción y aventura que sigue a Eivor, un guerrero vikingo, en su viaje por conquistar tierras en Inglaterra durante la era vikinga.",
    desarrollador: "Ubisoft",
    precio: 49.99,
    stock: 60,
    imagen: ""
  },
  {
    id: 18,
    titulo: "Overwatch 2",
    plataforma: "PC",
    descripcion: "Una secuela del popular shooter en equipo, con nuevos héroes, mapas y modos de juego, manteniendo la esencia del combate estratégico en equipo.",
    desarrollador: "Blizzard Entertainment",
    precio: 39.99,
    stock: 85,
    imagen: ""
  },
  {
    id: 19,
    titulo: "Starfield",
    plataforma: "PC",
    descripcion: "Un RPG de ciencia ficción ambientado en el espacio, desarrollado por Bethesda, que promete una vasta galaxia para explorar y una narrativa ramificada que se adapta a las decisiones del jugador.",
    desarrollador: "Bethesda Game Studios",
    precio: 69.99,
    stock: 50,
    imagen: ""
  },
  {
    id: 20,
    titulo: "Diablo IV",
    plataforma: "PC",
    descripcion: "La última entrega de la saga de RPGs de acción, donde los jugadores deben enfrentarse a hordas demoníacas en un oscuro y peligroso mundo de fantasía.",
    desarrollador: "Blizzard Entertainment",
    precio: 59.99,
    stock: 75,
    imagen: ""
  }
];
