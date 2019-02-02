import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppWidgetManagerService
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
  providers: [AppWidgetManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
