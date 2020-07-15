import {Injectable} from '@angular/core';
import { Player } from '../models/player.model';
import  dataPlayers  from  '../data/players.json';

@Injectable({
  providedIn: 'root'
})
export class PlayerRepository {

  /**
   * Find a player by identifier
   * 
   * @param id 
   */
  public findPlayerById(id: number): Player {
    let players: Player[] = dataPlayers;
    return players.find(player => player.id === id);
  }
  
}