import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnDestroy{

  //private task:Task[]=[]

  private task$:BehaviorSubject<Task[]> = new  BehaviorSubject<Task[]>([]);
  storageListenSub: Subscription
  
  task: any;


  constructor() { 
    this.loadState()

    this.storageListenSub =( fromEvent(window, 'storage') as Observable<StorageEvent>)
      .subscribe((event: StorageEvent) => {
        if (event.key === 'tasks') this.loadState()
      })
  }

  ngOnDestroy(): void {

    if (this.storageListenSub) this.storageListenSub.unsubscribe()

  }
  gettasks(): Observable<Task[]>{
    return this.task$.asObservable();
  }

  gettask(id: string):Observable<Task> {
    //return this.tasks.find(n => n.id === id)
    return this.task$.pipe(
      map(tasks => tasks.find(t => t.id == id))
    )
  }

  addtask(task:Task):any {
    //this.tasks.push(task)

    this.task$.next([...this.task$.getValue(),task])
    this.saveState()
  }

  updatetask(id: string, updatedFields: Partial<Task>) {
    const task = this.gettask(id)
    Object.assign(task, updatedFields)

    this.saveState()
  }

  deletetask(id: string): void{

  /*const taskIndex = this.task$.pipe(
      filter(tasks => tasks =! null),
      take(1),
      switchMap(task => {
        return next.handle(this.updatetask(req))
      })
    )

   /*if (taskIndex == -1) return

    this.task$.filter(taskIndex, 1)*/

    //this.task$ = this.task$.filter((t: { id: string; }) => t.id !== id);

    //this.task$ =this.task$.pipe(filter( tasks=> this.task$.find(t.id !== id) ))
   

    //this.task$.next(this.task$)


    /*this.task$.splice(id,1);
    this.task$.next(this.task$.splice());*/
    this.task$.next(this.task$.getValue().filter(t => t.id !==id))
    
    this.saveState()
  }

  saveState() {
    localStorage.setItem('tasks', JSON.stringify(this.task$))
  }

  loadState() {
    try {
      const tasksInStorage = JSON.parse(localStorage.getItem('tasks'))
      if (!tasksInStorage) return

      this.task.length = 0 // clear the tasks array (while keeping the reference)
      this.task.push(...tasksInStorage)

     

    } catch (e) {
      console.log('There was an error retrieving the tasks from localStorage')
      console.log(e)
    }
  }
}
/*function taskIndex(taskIndex: any, arg1: number) {
  throw new Error('Function not implemented.');
}*/

