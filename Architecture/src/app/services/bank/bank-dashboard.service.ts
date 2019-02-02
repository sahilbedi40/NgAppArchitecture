import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from '../../barrels/barrel.models';
import {Observable} from 'rxjs';

@Injectable()
export class BankDashboardService {
  private apiMethod = "";
  constructor(private http:HttpClient) { }

  public GetDashboard():Observable<ApiResponse<any>>{
    let token: string = "";//this.stateService.AccessToken.StoreSubject.value.acce_token;
    let endpoint: string = "" + this.apiMethod;//this.stateService.ServerDetails.StoreSubject.value.apiEndpoint + this.apiMethod;
   var request = {};
   let rheaders =new HttpHeaders();
   rheaders = rheaders.append('Content-Type','application/json; charset=utf-8').append('Authorization','bearer '+token);
   return this.http.post<ApiResponse<any>>(endpoint,request,{headers: rheaders});
  }

}
