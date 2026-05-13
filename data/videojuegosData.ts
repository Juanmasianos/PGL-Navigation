export interface Videojuego {
  id: string;
  nombre: string;
  jugado: boolean;
}

export const videojuegosIniciales: Videojuego[] = [
  { id: '1', nombre: 'Elden Ring', jugado: true },
  { id: '2', nombre: 'The Legend of Zelda: Tears of the Kingdom', jugado: false },
  { id: '3', nombre: 'Baldur\'s Gate 3', jugado: true },
  { id: '4', nombre: 'Cyberpunk 2077', jugado: false },
  { id: '5', nombre: 'Final Fantasy VII Rebirth', jugado: false },
];
