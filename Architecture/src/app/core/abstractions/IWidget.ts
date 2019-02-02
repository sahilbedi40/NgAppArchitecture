import {IStore} from './IStore';
import {AppWidgetManagerService} from '../../barrels/barrel.services';

export interface IWidget<T>{
    Title:string;
    Loading:boolean;
    Lazy:boolean;
    Store:IStore<T>;
    Desktop:boolean;
    Tablet:boolean;
    Mobile:boolean;
    Refresh():void;
    WidgetManager: AppWidgetManagerService;
}