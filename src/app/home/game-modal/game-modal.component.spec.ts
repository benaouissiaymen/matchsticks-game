import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalComponent } from './game-modal.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('GameModalComponent', () => {
  let component: GameModalComponent;
  let fixture: ComponentFixture<GameModalComponent>;

  beforeEach(() => {

    //Inisialization
    const routerStub = { navigate: array => ({}) }

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, FormsModule],
      declarations: [ GameModalComponent ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: NgbActiveModal, useValue: new NgbActiveModal()}
      ]
    });

    fixture = TestBed.createComponent(GameModalComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('newGame', () => {
    it('makes expected calls', () => {
      
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();

      component.newGame();

      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
