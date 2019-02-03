import { Injectable } from '@angular/core';
import { BaseStore} from '../barrels/barrel.core';
import {DirectDebit, Account} from '../barrels/barrel.models';
import {AppStoreDirectDebitService} from './store/app-store-direct-debit.service';

@Injectable()
export class AppStoreCacheService {

/*
 This cache service is used to cache the object and transfer data from one page to another. 
 Also if you want to perform Edit operation on object use this service.
*/

  public DirectDebit: BaseStore<DirectDebit>;
  public Account: BaseStore<Account>;
  constructor(private storeDirectDebits: AppStoreDirectDebitService) {
    this.DirectDebit = new BaseStore<DirectDebit>();
    this.Account = new BaseStore<Account>();
   }

   public AccountSet(value: Account): void{
     this.storeDirectDebits.Store.clear();
     this.Clear();
     this.Account.Set(value);
   }

   public AccountGet(): BaseStore<Account>{
     return this.Account;
   }

   public Clear(): void{
     this.DirectDebit.clear();
   }

}
