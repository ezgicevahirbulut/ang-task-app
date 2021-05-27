import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  users: User[]
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.users = this.userService.getusers()
  }

}
