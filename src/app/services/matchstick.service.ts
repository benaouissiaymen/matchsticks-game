import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { PlayerRepository } from '../repositories/palyer.repository';
import { Player } from '../models/player.model';

@Injectable({
    providedIn: 'root'
})
export class MatchstickService {

    constructor(public playerRepository:PlayerRepository) {}

    /**
     * Initialize game parameters
     * 
     * @param numberOfMatchsticks 
     */
    public initializeGame(numberOfMatchsticks: number): Game {
      let game: Game = new Game();
      game = new Game()
      game.numberOfMatchsticks = numberOfMatchsticks;
      game.numberOfCurrentMatchsticks = game.numberOfMatchsticks;

      game.firstPlayer = this.playerRepository.findPlayerById(1);
      game.secondPlayer = this.playerRepository.findPlayerById(2);
      game.currentPlayer = game.firstPlayer;

      return game;
    }

    /**
     * Return a bool for showing or no an matchstick
     * 
     * @param numberOfImg 
     */
    public isShowMatchstick(game: Game, numberOfImg: number): boolean {
      if(game.numberOfCurrentMatchsticks >= numberOfImg) {
        return true;
      } else {
        return false;
      }
    }
  
    /**
     * 
     * @param player 
     * @param choosenNumber 
     */
    public play(game: Game, player: number, choosenNumber: number): Player {
        let winner: Player;
        //modify the current number of matchsticks relative the number choosen
        game.numberOfCurrentMatchsticks = game.numberOfCurrentMatchsticks - choosenNumber;
  
        //Game over
        if(game.numberOfCurrentMatchsticks === 0) { 
          winner = game.currentPlayer;
        } else {
          //change the current player
          if(game.currentPlayer.id === 1) {
            game.currentPlayer = game.secondPlayer;
         } else {
            game.currentPlayer = game.firstPlayer;
         }
        }

        return winner;
    }

}