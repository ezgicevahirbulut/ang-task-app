import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  id:number;
  //users: User[] | undefined;
  route: any;

  users:Observable<{user:User[]}>
  user: Observable<User[]>;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getusers()

    this.route.params.subscribe(next, (params:Params)=>{
      this.id=+params.id;
    });

  }

}
function next(next: any, arg1: (params: Params) => void) {
  throw new Error('Function not implemented.');
}

