import { User } from './../shared/user.model';
import {Action} from '@ngrx/store';
import { Task } from 'src/app/shared/task.model';




export const ADD_TASK='ADD_TASK';

export class AddTasks implements Action {
    readonly type = ADD_TASK;
    payload:Task | undefined;
}


export const ADD_USER='ADD_TASK';

export class AddUser implements Action{
    readonly type = ADD_USER;
    payload:User;

}