import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AppRoutes} from '../barrels/barrel.core';
import {AppStateService} from './app-state.service';


@Injectable()
export class AppNavigationService {

  constructor(private router: Router, private stateService: AppStateService) { }

  public Navigation(route: AppRoutes): void{
    this.router.navigate([route]);;
  }

  public GotoLogin(): void{
    this.router.navigate([AppRoutes.Login]);
  }

  public GotoLogout(): void{
    this.stateService.RouteTitle.Set('');
    this.stateService.AccessToken.clear();
    window.location.replace('/logout');
  }

  public GotoDashboard(): void{
    setTimeout(() =>{
      this.stateService.RouteTitle.Set('Dashboard');
    },300);
    this.router.navigate([AppRoutes.Dashboard]);
  }

  public GotoAccountSubDetail(route: AppRoutes, source: AppRoutes): void{
    switch(route){
      case AppRoutes.AccountPaymentCreate:{
        this.GotoAccountPaymentCreate();
        break;
      }
    }
  }

  public GotoAccountPaymentCreate():void{
    this.router.navigate([AppRoutes.Account,{outlets:{'section2':[AppRoutes.AccountPaymentCreate]}}]);
  }

}
