import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {


  public user$:Observable<[]>
  constructor(private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService) {
   }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get('id')
      this.user$ = this.UserService.getuser(userId)
    })
  }

  onFormSubmit(form: NgForm) {
    const { name } = form.value

    this.UserService.updateuser(this.user$.id, {
      name
    })

    this.notificationService.show('user updated!')
}
}