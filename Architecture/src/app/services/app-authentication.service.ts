import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationToken} from '../barrels/barrel.models';
import {AppStateService} from './app-state.service';
import {AppCookieService} from './app-cookie.service';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AppAuthenticationService {

  public LoginSuccess: EventEmitter<string>;
  public LoginFailed: EventEmitter<string>;
  public RegistrationState: EventEmitter<boolean>;
  constructor(private http: HttpClient, private stateService: AppStateService, private cookieService: AppCookieService) {
    this.LoginSuccess = new EventEmitter<string>();
    this.LoginFailed = new EventEmitter<string>();
    this.RegistrationState = new EventEmitter<boolean>();
   }

   public IsAuthenticated(): boolean {
     var token = this.cookieService.GetAuthorizationToken();
     if(isNullOrUndefined(token) || token == ''){
       return false;
     }
     else{
       return true;
     }
   }

   public SignOut(): void{
     this.cookieService.DeleteAll();
   }

   private GetAuthToken(customerNumber: string, password: string){
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type','application/x-www-form-urlencoded');
     return this.http.post<AuthenticationToken>("url","body",{headers: headers});
   }

   public Login(customerNumber: string, password: string): void{
     this.GetAuthToken(customerNumber,password).subscribe(
       (result) =>{
         this.stateService.AccessToken.Set(result);
         this.LoginSuccess.emit('');
       },
       (error) =>{
         this.LoginFailed.emit(error);
       }
     )
   }

}
