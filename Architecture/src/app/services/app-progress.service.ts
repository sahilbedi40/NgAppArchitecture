import { Injectable } from '@angular/core';
import {AppStateService} from './app-state.service';
import {AppProgressRippleState} from '../barrels/barrel.core';

@Injectable()
export class AppProgressService {

  constructor(private stateService: AppStateService) { }

  public Think(): void{
    this.stateService.AppProgressRipple.Set(AppProgressRippleState.Think);
  }

  public Stop(timeout: number): void{
    setTimeout(() =>{
      this.stateService.AppProgressRipple.Set(AppProgressRippleState.Stop);
    },timeout);
  }

  public Success(): void{
    this.stateService.AppProgressRipple.Set(AppProgressRippleState.Success);
  }

  public Error(): void {
    this.stateService.AppProgressRipple.Set(AppProgressRippleState.Error);
  }

}
