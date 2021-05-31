import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

 // private user:User[]

  private users$ : BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  storageListenSub: Subscription;
  user: any;

  constructor() {
    this.loadState()

    this.storageListenSub = (fromEvent(window, 'storage') as Observable<StorageEvent>)
      .subscribe((event: StorageEvent) => {
        if (event.key === 'users') this.loadState()
      })
  }

  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }
  
  getusers(): Observable<User[]> {
    return this.users$.asObservable();
  }

  getuser(id: string): Observable<User> {
    return this.users$.pipe(
      map(users => users.find(u => u.id === id))
    )
  }

  adduser(user: User):any {
    //this.user.push(user)
    this.users$.next([...this.users$.getValue(), user])

    this.saveState()
  }

  updateuser(id: string, updatedFields: Partial<User>) {
    const user = this.getuser(id)
    Object.assign(user, updatedFields)

    this.saveState()
  }

  deleteuser(id: string):void {
    /*const userIndex = this.users$.pipe(
      map(users=>users.find(b => b.id === id))
    )

   /* if (userIndex == -1) return
    this.users$.splice(userIndex, 1)
    this.saveState()*/

    /*return this.deleteuser(User)*/

    //this.users$ = this.users$.filter((_user:any) => this.users$.id !==null);
    
    this.users$.next(this.users$.getValue().filter(u => u.id !== id))
  }

  saveState() {
    localStorage.setItem('users', JSON.stringify(this.users$.getValue()))
  }

  loadState() {
    try {
      const usersInStorage = JSON.parse(localStorage.getItem('user')!, (key, value) => {
        return value
      })

      this.user.length = 0 // clear the users array (while keeping the reference)
      this.user.push(...usersInStorage)
    } catch (e) {
      console.log('There was an error retrieving the users from localStorage')
      console.log(e)
    }
  }

}
