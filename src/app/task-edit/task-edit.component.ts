import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import  'rxjs/Rx';

import { NotificationService } from '../shared/notification.service';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  public task$:Observable<Task[]>

 

  constructor(
    private route: ActivatedRoute,
    private taskService:TaskService,
    private router:Router,
    private notificatiosService:NotificationService)  { }

  public ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id')
      
    })

    
  }

  onFormSubmit(form: NgForm) {
   
    this.taskService.updatetask(this.task$.id, form.value)
    this.router.navigateByUrl("/tasks")

    this.notificatiosService.show('task updated!')
  }

  deletetask() {
    this.taskService.deletetask(this.task$.id)
    
    this.router.navigateByUrl("/tasks")

    this.notificatiosService.show('task deleted')
  }

}
