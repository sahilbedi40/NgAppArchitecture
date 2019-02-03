import { Injectable } from '@angular/core';
import {CookieService} from '../barrels/barrel.vendor';

@Injectable()
export class AppCookieService {
private authToken: string = "AuthToken";
private apiUrl: string = "ApiUrl";

  constructor(private cookieService: CookieService) { }

  public GetAuthorizationToken(): string{
    return this.cookieService.get(this.authToken);
  }

  public GetApiEndPointUrl(): string{
    return this.cookieService.get(this.apiUrl);
  }

  public SetAuthorizationToken(value: string){
    this.cookieService.set(this.authToken,value);
  }

  public DeleteAll(): void{
    this.cookieService.deleteAll();
  }
}
