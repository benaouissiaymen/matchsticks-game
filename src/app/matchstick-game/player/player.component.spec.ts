import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { Game } from 'src/app/models/game.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatchstickService } from 'src/app/services/matchstick.service';
import { Player } from 'src/app/models/player.model';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ PlayerComponent ],
      providers: []
    })

    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('play', () => {
    it('makes expected calls', () => {
      spyOn(component.playerPlay, 'emit');
      component.play(2, 3);

      expect(component.playerPlay.emit).toHaveBeenCalled();
    });
  });

});
