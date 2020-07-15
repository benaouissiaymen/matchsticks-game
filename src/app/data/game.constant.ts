import { Game } from '../models/game.model';

export const GAME: Game[] = [
    {
        id: 1,
        numberOfMatchsticks: 21,
        firstPlayer: {
            id: 1,
            name: 'First player'
        },
        secondPlayer: {
            id: 2,
            name: 'Second player'
        },
        winner: 2
    },
    {
        id: 2,
        numberOfMatchsticks: 31,
        firstPlayer: {
            id: 1,
            name: 'First player'
        },
        secondPlayer: {
            id: 2,
            name: 'Second player'
        },
        winner: 1
    }
]