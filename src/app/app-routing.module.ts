import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task } from './shared/task.model';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'users/add',component:UserAddComponent},
  {path:'users/manage',component:UserManageComponent, children:[
    {path:':id', component:UserEditComponent}
  ]},
  {path:'task',component:Task},
  {path:'task/add',component:TaskAddComponent},
  {path:'task/:id',component:TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
