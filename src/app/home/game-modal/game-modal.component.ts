import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatchstickService } from 'src/app/services/matchstick.service';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.css']
})
export class GameModalComponent {

  constructor(public activeModal: NgbActiveModal, public router: Router) { }

  public numberOfMatchsticks: number = 21;

  /**
   * Launch a new game
  */
  public newGame() : void {
    this.router.navigate(['matchstick', this.numberOfMatchsticks]);
    this.activeModal.close();
  }

}
