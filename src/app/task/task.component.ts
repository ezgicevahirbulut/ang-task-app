import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks:Task[]
  constructor(private taskService:TaskService) {

   }

  ngOnInit(): void {
    this.tasks=this.taskService.gettasks()
  }

}
