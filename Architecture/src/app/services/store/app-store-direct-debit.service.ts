import { Injectable, EventEmitter } from '@angular/core';
import {BaseStore, IStore} from '../../barrels/barrel.core';
import {BankDirectDebitService} from '../bank/bank-direct-debit.service';
import {DirectDebit} from '../../barrels/barrel.models';

@Injectable()
export class AppStoreDirectDebitService implements IStore<Array<DirectDebit>> {

  RefreshSuccess: EventEmitter<boolean>;
  RefreshFailed: EventEmitter<string>;
  public Store: BaseStore<Array<DirectDebit>>;
  constructor(private dataService:BankDirectDebitService) {
    this.Store = new BaseStore<Array<DirectDebit>>();
    this.RefreshSuccess = new EventEmitter<boolean>();
    this.RefreshFailed = new EventEmitter<string>();
   }

   public SetStore(value: Array<DirectDebit>): void{
     this.Store.Set(value);
   }

   public Refresh(accountNumber: string = ''): void{
     this.dataService.GetDirectDebits(accountNumber).subscribe(
       (result) =>{
         if(result.success && result.response)
          {
            this.SetStore(result.response.directDebits);
            this.RefreshSuccess.emit(true);
          }
          else{
            this.RefreshFailed.emit(result.message);
          }
       },
       (error) =>{
         this.RefreshFailed.emit(error);
       }
     );
   }

}
