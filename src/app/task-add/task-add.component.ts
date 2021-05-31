import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  showValidationErrors!: boolean;

  public task$:Observable<Task[]>

  constructor(
    private taskService:TaskService,
    private router:Router,
    private notificationService: NotificationService)  { }

  ngOnInit(): void {
  }
  
  onFormSubmit(form: NgForm) {
    console.log(form)

    if (form.invalid) return this.showValidationErrors = true
    
    const task = new Task(form.value.title, form.value.content)

    this.taskService.addtask(task)
    this.router.navigateByUrl("/task")
    this.notificationService.show('Created task')
  }
}
