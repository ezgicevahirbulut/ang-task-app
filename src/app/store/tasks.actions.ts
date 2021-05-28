import {Action} from '@ngrx/store';
import { Task } from 'src/app/shared/task.model';




export const ADD_TASK='ADD_TASK';

export class AddTasks implements Action {
    readonly type = ADD_TASK;
    payload:Task | undefined;
}