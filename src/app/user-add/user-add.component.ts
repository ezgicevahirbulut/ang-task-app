import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  [x: string]: any;

  constructor(
    private userService:UserService,
    private router:Router,
    private notificationsService:NotificationService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value
    const user = new User(name, url)
    this.userService.adduser(user)
    this.router.navigateByUrl("/users")
    this.notificationService.show('Created user!')
  }
}
