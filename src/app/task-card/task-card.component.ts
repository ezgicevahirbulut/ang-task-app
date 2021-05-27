import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() tasks: Task

  constructor() { }

  ngOnInit(): void {
  }

}
