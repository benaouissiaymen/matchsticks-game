import { NgModule } from '@angular/core';
import { GameModalComponent } from './game-modal/game-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
  ];

@NgModule({
    declarations: [
      HomeComponent,
      GameModalComponent
    ],
    imports: [
      RouterModule.forChild(routes),
      NgbModule,
      FormsModule
    ],
    exports: [RouterModule],
    entryComponents: [GameModalComponent],
  })
  export class HomeModule { }