import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppWidgetManagerService,
  AppSpriteService,
  AppProgressService,
  AppStateService,

  AppStoreDirectDebitService,
  BankDirectDebitService
} from './barrels/barrel.services';

import {
  RouteDashboardComponent,
  WidgetDashboardComponent
} from './barrels/barrel.components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteDashboardComponent,
    WidgetDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppWidgetManagerService,
              AppSpriteService, 
              AppStoreDirectDebitService,
              BankDirectDebitService,
              AppStateService,
              AppProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
