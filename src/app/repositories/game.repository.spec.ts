import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GameRepository } from './game.repository';
import { Game } from '../models/game.model';

describe('GameRepository', () => {
    let gameRepository: GameRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [],
            providers: []
        });

        gameRepository = TestBed.get(GameRepository);
    });

    it('should create the component', () => {
        expect(gameRepository).toBeTruthy();
    });

    describe('findGameById', () => {
        it('makes expected calls', () => {
            let result:Game = gameRepository.findGameById(2);
            expect(result.id).toEqual(2);
        });
      });

      describe('saveGame', () => {
        it('makes expected calls', () => {
            gameRepository.saveGame(null);
        });
      });

});