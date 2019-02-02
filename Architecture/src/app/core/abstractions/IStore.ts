import {EventEmitter} from '@angular/core';
import {BaseStore} from '../../barrels/barrel.core';

export interface IStore<T>{
    Store:BaseStore<T>;
    Refresh():void;
    RefreshSuccess: EventEmitter<boolean>;
    RefreshFailed: EventEmitter<string>;
}
