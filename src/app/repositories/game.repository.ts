
import {Injectable} from '@angular/core';
import { Game } from '../models/game.model';
import { GAME } from '../data/game.constant';

@Injectable({
  providedIn: 'root'
})
export class GameRepository {

  /**
   * Find a game by  identifier
   * 
   * @param id 
   */
  public findGameById(id: number): Game {
    return GAME.find(game => game.id === id);
  }

  /**
   * Save a game
   * 
   * @param game 
   */
  public saveGame(game: Game): Game {
    return undefined;
  }
}
