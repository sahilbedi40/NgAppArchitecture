import {Observable,BehaviorSubject} from 'rxjs';
import {isNullOrUndefined} from 'util';

export class BaseStore<T>{
    public StoreSubject: BehaviorSubject<T> = new BehaviorSubject<T>(null);
    public StoreObservable: Observable<T>;

    constructor(){
        this.StoreObservable = this.StoreSubject.asObservable();
    }

    public Set(value: T): void {
        this.StoreSubject.next(value);
    }

    public clear(): void{
        this.StoreSubject.next(null);
    }

    public IsEmpty(): boolean {
        return isNullOrUndefined(this.StoreSubject.value);
    }
}