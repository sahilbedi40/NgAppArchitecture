import { Injectable } from '@angular/core';
import {BaseStore, AppProgressRippleState} from '../barrels/barrel.core';
import {AuthenticationToken} from '../barrels/barrel.models';

@Injectable()
export class AppStateService {

  public AppProgressRipple: BaseStore<AppProgressRippleState>;
  public AccessToken: BaseStore<AuthenticationToken>;
  public RouteTitle: BaseStore<string>;

  constructor() { 
    this.AccessToken = new BaseStore<AuthenticationToken>();
    this.AppProgressRipple = new BaseStore<AppProgressRippleState>();
    this.AppProgressRipple.Set(AppProgressRippleState.Stop);

    this.RouteTitle = new BaseStore<string>();
    this.RouteTitle.Set('');
  }

}
