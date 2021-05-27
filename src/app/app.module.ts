import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    UserManageComponent,
    UserTileComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
