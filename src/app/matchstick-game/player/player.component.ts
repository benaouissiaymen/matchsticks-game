import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatchstickService } from 'src/app/services/matchstick.service';
import { Player } from 'src/app/models/player.model';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  public id: string;
  @Input()
  public name: string;
  @Input()
  public game: Game;

  @Output()
  playerPlay = new EventEmitter<{idPlayer: number, choosenNumber: number}>();

  public player: Player;

  constructor(public matchstickService: MatchstickService) { }

  ngOnInit() {
    this.player = new Player();
    this.player.id = parseInt(this.id);
    this.player.name = this.name;
  }

 /**
   * 
   * @param player 
   * @param choosenNumber 
   */
  public play(player: number, choosenNumber: number): void {
    this.playerPlay.emit({idPlayer: player, choosenNumber: choosenNumber});
  }

}
