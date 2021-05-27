import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  users: User[] = []

  storageListenSub: Subscription
  
  constructor() {
    this.loadState()

    this.storageListenSub = fromEvent(window, 'storage')
      .subscribe((event: StorageEvent) => {
        if (event.key === 'users') this.loadState()
      })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }
  
  getusers() {
    return this.users
  }

  getuser(id: string) {
    return this.users.find(b => b.id === id)
  }

  adduser(user: User) {
    this.users.push(user)

    this.saveState()
  }

  updateuser(id: string, updatedFields: Partial<User>) {
    const user = this.getuser(id)
    Object.assign(user, updatedFields)

    this.saveState()
  }

  deleteuser(id: string) {
    const userIndex = this.users.findIndex(b => b.id === id)
    if (userIndex == -1) return
    this.users.splice(userIndex, 1)
    this.saveState()
  }

  saveState() {
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  loadState() {
    try {
      const usersInStorage = JSON.parse(localStorage.getItem('users'), (key, value) => {
        return value
      })

      this.users.length = 0 // clear the users array (while keeping the reference)
      this.users.push(...usersInStorage)
    } catch (e) {
      console.log('There was an error retrieving the users from localStorage')
      console.log(e)
    }
  }

}
