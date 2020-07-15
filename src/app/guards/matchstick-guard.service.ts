import { CanActivate, Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MatchstickGuardService implements CanActivate {
  
  constructor(public route: ActivatedRoute, public router: Router) {}
  
  /**
   * check if the number Of match sticks parameters is not given in URL, so it will return to homepage
   */
  canActivate(): boolean {
    this.route.params.subscribe((params: Params) => {
      let numberOfMatchsticks: number = params['numberOfMatchsticks'];
      if (numberOfMatchsticks > 0) {
        this.router.navigate(['home']);
        return false;
      }
    });
    return true;
  }

}