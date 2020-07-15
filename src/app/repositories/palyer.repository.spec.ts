import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlayerRepository } from './palyer.repository';
import { Player } from '../models/player.model';

describe('PlayerRepository', () => {
    let playerRepository: PlayerRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [],
            providers: []
        });

        playerRepository = TestBed.get(PlayerRepository);
    });

    it('should create the component', () => {
        expect(playerRepository).toBeTruthy();
    });

    describe('findPlayerById', () => {
        it('makes expected calls', () => {
            
            let result:Player = playerRepository.findPlayerById(1);
            expect(result.id).toEqual(1);
        });
      });

});