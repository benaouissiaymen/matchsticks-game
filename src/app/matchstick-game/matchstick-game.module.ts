import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatchstickGameComponent } from './matchstick-game.component';
import { PlayerComponent } from './player/player.component';
import { MatchstickGuardService } from '../guards/matchstick-guard.service';

const routes: Routes = [
    { path: '', component: MatchstickGameComponent, canActivate: [MatchstickGuardService] },
];

@NgModule({
    declarations: [
      MatchstickGameComponent,
      PlayerComponent
    ],
    imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
    exports: [RouterModule]
})
export class MatchstickGameModule { }