import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import { TaskService } from '../shared/task.service';
import {Task} from '../shared/task.model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: Observable<{tasks: Task[]}>;
  
  constructor(private taskService:TaskService,
    private store:Store<{addTasks: {tasks:Task []}}>) {

   }

  ngOnInit(): void {
    this.tasks = this.store.select('addTasks')
    this.tasks=this.taskService.gettasks()
  }

}
