import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchstickGameComponent } from './matchstick-game.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatchstickService } from '../services/matchstick.service';
import { Game } from '../models/game.model';
import { Player } from '../models/player.model';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

describe('MatchstickGameComponent', () => {
  let component: MatchstickGameComponent;
  let fixture: ComponentFixture<MatchstickGameComponent>;

  beforeEach(() => {

    //Inisialization
    const routerStub = { navigate: array => ({}) };

    const game: Game = new Game();
    game.numberOfMatchsticks = 21;
    const player1: Player = new Player();
    player1.id = 1;
    player1.name = "First player";
    game.firstPlayer = player1;
    const player2: Player = new Player();
    player2.id = 2;
    player2.name = "Second player"
    game.secondPlayer = player2;

    const matchstickServiceStub = { 
      initializeGame: () => ({}),
      isShowMatchstick: () => ({}),
      play: () => ({player2}),
      game: game
    };

    const obsparam = new Observable<Params>();
    const routeStub = ({ params: of({ obsparam })});

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [ MatchstickGameComponent ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: routeStub},
        { provide: MatchstickService, useValue: matchstickServiceStub }
      ]
    });

    fixture = TestBed.createComponent(MatchstickGameComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const matchstickServiceStub: MatchstickService = fixture.debugElement.injector.get(MatchstickService);
      spyOn(matchstickServiceStub, 'initializeGame').and.callThrough();

      component.ngOnInit();

      expect(component.firstPlayer.id).toEqual(1);
      expect(matchstickServiceStub.initializeGame).toHaveBeenCalled();
    });
  });

  describe('isShowMatchstick', () => {
    it('makes expected calls', () => {
      const matchstickServiceStub: MatchstickService = fixture.debugElement.injector.get(MatchstickService);
      spyOn(matchstickServiceStub, 'isShowMatchstick').and.callThrough();

      let result:boolean = component.isShowMatchstick(4);

      expect(matchstickServiceStub.isShowMatchstick).toHaveBeenCalled();
      expect(result).toBeTruthy();
    });
  });

  describe('newGame', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();

      component.newGame();

      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('play', () => {
    it('makes expected calls', () => {
      const matchstickServiceStub: MatchstickService = fixture.debugElement.injector.get(MatchstickService);
      spyOn(matchstickServiceStub, 'play').and.callThrough();
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();

      component.play({idPlayer: 2, choosenNumber: 2});

      expect(matchstickServiceStub.play).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

});
