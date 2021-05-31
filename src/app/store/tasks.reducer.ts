import {Action} from '@ngrx/store';
import * as AddTask from './tasks.actions';
import { Task } from "../shared/task.model";
import {ADD_TASK} from "./tasks.actions";

const initialState={
    task:[]
};

export function taskReducer(
    state=initialState, 
    action:AddTask.AddTasks){
    switch(action.type){
        case AddTask.ADD_TASK:
           return  {
                ...state,
                tasks: [...state.task, action.payload]
            };
            default:
                 return state;

    }

}