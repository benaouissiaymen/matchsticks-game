import { MatchstickService } from "./matchstick.service";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlayerRepository } from '../repositories/palyer.repository';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';

describe('MatchstickService', () => {
    let matchstickService: MatchstickService;

    //Inisialization
    const routerStub = { navigate: array => ({}) };

    const player1: Player = new Player();
    player1.id = 1;
    player1.name = "First player";
    const player2: Player = new Player();
    player2.id = 2;
    player2.name = "Second player";
    const playerRepositoryStub = {
        findPlayerById(id:number) {
            if(id === 1) {
                return player1;
            } else {
                return player2;
            }          
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [],
            providers: [
                { provide: PlayerRepository, useValue: playerRepositoryStub }
            ]
        });

        matchstickService = TestBed.get(MatchstickService);
    });

    it('should create the component', () => {
        expect(matchstickService).toBeTruthy();
    });

    describe('initializeGame', () => {
        it('makes expected calls', () => {
            let game:Game = matchstickService.initializeGame(21);
    
            expect(game.numberOfMatchsticks).toEqual(21);
        });
      });

      describe('isShowMatchstick', () => {
        it('return true', () => {
            let game:Game = matchstickService.initializeGame(21);
            let result:boolean = matchstickService.isShowMatchstick(game, 6);
    
            expect(result).toBeTruthy();
        });

        it('return false', () => {
            let game:Game = matchstickService.initializeGame(5);
            let result:boolean = matchstickService.isShowMatchstick(game, 6);
    
            expect(result).toBeFalsy();
        });
      });

      describe('play', () => {
        it('game over', () => {
            let game:Game = matchstickService.initializeGame(3);
            matchstickService.play(game, 1, 3);
    
            expect(game.numberOfCurrentMatchsticks).toEqual(0);
        });

        it('continue game', () => {
            let game:Game = matchstickService.initializeGame(21);
            matchstickService.play(game, 1, 3);
            expect(game.currentPlayer.id).toEqual(2);

            matchstickService.play(game, 2, 1);
        });
      });

});