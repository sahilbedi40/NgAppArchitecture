import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IStore, AppStores} from '../../../barrels/barrel.core';
import {DirectDebit} from '../../../barrels/barrel.models';
import {AppWidgetManagerService} from '../../../barrels/barrel.services';
import {Observable} from 'rxjs';

@Component({
  selector: 'widget-dashboard',
  templateUrl: './widget-dashboard.component.html',
  styleUrls: ['./widget-dashboard.component.css']
})
export class WidgetDashboardComponent implements OnInit {

  @Input()
  get Desktop(): boolean{
    return this.desktop;
  }
  set Desktop(value: boolean){
    this.desktop = value;
  }

  @Input()
  get Tablet(): boolean{
    return this.tablet;
  }
  set Tablet(value: boolean){
    this.tablet = value;
  }

  @Input()
  get Mobile(): boolean{
    return this.mobile;
  }
  set Mobile(value: boolean){
    this.mobile = value;
  }

  private desktop: boolean;
  private tablet: boolean;
  private mobile: boolean;

  public Title: string = "Direct Debits";
  public Loading: boolean = true;
  public Lazy: boolean = false;
  public Store: IStore<Array<DirectDebit>>;
  public WidgetManager: AppWidgetManagerService;

  public get DirectDebits(): Observable<Array<DirectDebit>>{
    return this.Store.Store.StoreObservable;
  }



  constructor(widgetManagerService: AppWidgetManagerService) {
    this.WidgetManager = widgetManagerService;
    this.Store = this.WidgetManager.GetStore<Array<DirectDebit>>(AppStores.DirectDebit);
   }

  ngOnInit() {
    setTimeout(() =>{
      this.Loading = false;
    },1000);
  }

  ngOnDestroy(){

  }

  public Refresh(): void{
    if(!this.Lazy){
      
    }
  }
}
