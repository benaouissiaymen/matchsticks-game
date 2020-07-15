import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MatchstickService } from '../services/matchstick.service';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-matchstick-game',
  templateUrl: './matchstick-game.component.html',
  styleUrls: ['./matchstick-game.component.css']
})
export class MatchstickGameComponent implements OnInit {

  public game: Game;
  public firstPlayer: Player;
  public secondPlayer: Player;

  constructor(public router: Router, public route: ActivatedRoute, public matchstickService: MatchstickService) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          let numberOfMatchsticks:number = parseInt(params['numberOfMatchsticks']);
          this.game = this.matchstickService.initializeGame(numberOfMatchsticks);
          this.firstPlayer = this.game.firstPlayer;
          this.secondPlayer = this.game.secondPlayer;
      });
  }

  /**
  * 
  * @param numberOfImg 
  */
  public isShowMatchstick(numberOfImg: number): boolean {
    return this.matchstickService.isShowMatchstick(this.game, numberOfImg);
  }

  /**
   * Permit to retun to the homepage
   */
  public newGame(): void {
    this.router.navigate(['home']);
  }

  /**
   * @param
   */
  public play(param) {
    let winner = this.matchstickService.play(this.game, param.idPlayer, param.choosenNumber);
    if(winner !== undefined) {
        alert('Bravo, le joueur N°'+winner.id+' est le gagnant');
        //going to the homepage
        this.router.navigate(['home']);
    }
  }
}
