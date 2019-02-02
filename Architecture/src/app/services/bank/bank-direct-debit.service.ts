import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiResponse, DirectDebit,GetDirectDebitResponse} from '../../barrels/barrel.models';
import {Observable} from 'rxjs';

@Injectable()
export class BankDirectDebitService {
  private apiMethod = "";
  constructor(private http:HttpClient) { }

  public GetDirectDebits(accountNumber:string): Observable<ApiResponse<GetDirectDebitResponse>>{
    let token: string = "";//this.stateService.AccessToken.StoreSubject.value.acce_token;
    let endpoint: string = "" + this.apiMethod;//this.stateService.ServerDetails.StoreSubject.value.apiEndpoint + this.apiMethod;
   var request = {};
   let rheaders =new HttpHeaders();
   rheaders = rheaders.append('Content-Type','application/json; charset=utf-8').append('Authorization','bearer '+token);
   return this.http.post<ApiResponse<GetDirectDebitResponse>>(endpoint,request,{headers: rheaders});
  }
}
