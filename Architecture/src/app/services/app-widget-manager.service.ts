import { Injectable } from '@angular/core';
import {AppStores,IStore} from '../barrels/barrel.core';

@Injectable()
export class AppWidgetManagerService {

  constructor() { }

  public SetStore<T>(store:AppStores, data: T){

  }

  public GetStore<T>(store:AppStores): IStore<T>{
    switch(store){
      case AppStores.Accounts:
      {
        return null;
       // return (<any>this.accountStore);
      }
      case AppStores.Payees:
      {
        return null;
        //return (<any> this.payeeStore);
      }

    }
    return null;
  }

}


