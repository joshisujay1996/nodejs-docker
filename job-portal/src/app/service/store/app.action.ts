import { Action } from "@ngrx/store";
import { data } from "./data/data.state";

export class AddDataAction implements Action{
    readonly type = 'add';
    constructor(public payload: data){
    }
}

export type DataAction = AddDataAction;