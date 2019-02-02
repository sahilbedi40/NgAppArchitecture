import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AppRoutes,IAppRoute} from '../../../barrels/barrel.core';
import {DirectDebit} from '../../../barrels/barrel.models';
import {AppStoreDirectDebitService} from '../../../barrels/barrel.services';
import {isObject} from 'util';

@Component({
  selector: 'route-dashboard',
  templateUrl: './route-dashboard.component.html',
  styleUrls: ['./route-dashboard.component.css']
})
export class RouteDashboardComponent implements OnInit, OnDestroy, IAppRoute {

  public Route: AppRoutes = AppRoutes.DirectDebitList;
  public Loaded: boolean = false;

  public get DirectDebits():Observable<Array<DirectDebit>>{
    return this.storeDirectDebitService.Store.StoreObservable;
  }

  private refreshSuccessSubscription: Subscription;
  private refreshFailSubscription: Subscription;

  constructor(private storeDirectDebitService: AppStoreDirectDebitService) { }

  ngOnInit() {
    this.refreshSuccessSubscription = this.storeDirectDebitService.RefreshSuccess.subscribe((args) =>{
      //this.progresService.Stop(1000);
      //this.spriteService.Speak("Here are your direct debits ..", 500);
      this.Loaded = true;
    });

    this.refreshFailSubscription = this.storeDirectDebitService.RefreshFailed.subscribe((args) =>{
      //this.progressService.Error();
      //this.spriteService.Speak("Oops, something went wrong :(", 1000);
      var error = isObject(args) && isObject(args.error) ? args.error.message: isObject(args) ? args.status: args;
      //this.spriteService.Speak('Error: '+ error, 1500);
      //this.progressService.Stop(1000);
    });

    //this.progressService.Think();
    //this.spriteService.Speak('One moment, loading your direct debits');
    this.storeDirectDebitService.Refresh('123456');

  }

  ngOnDestroy(){
    this.refreshFailSubscription.unsubscribe();
    this.refreshSuccessSubscription.unsubscribe();
  }

}
