import { Store } from '@ngrx/store';
import { User } from './../shared/user.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  user:Observable<{users:User[];}>
  
  constructor(private userService: UserService,
    
    ) { }

  ngOnInit(): void {
    
    this.user = this.userService.getusers()
  }

}
