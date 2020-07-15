import { Player } from './player.model';

export class Game {
    public id: number;

    /** Number of matchsticks in the game */
    public numberOfMatchsticks: number;
    /** Number of current matchsticks in the game */
    public numberOfCurrentMatchsticks?: number;

    public firstPlayer: Player;
    public secondPlayer: Player;
    /** Current player */
    public currentPlayer?: Player;

    public winner: number;
    public dateGame?: Date;
}