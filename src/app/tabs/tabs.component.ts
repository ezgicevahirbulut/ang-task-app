import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { count } from 'rxjs/operators';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit,OnDestroy {

  //private firstObsSubs:Subscription;

  constructor() { }

  ngOnInit(): void {
  /* this.firstObsSubs = interval(period:1000).subscribe(next:count =>{
      console.log(count)
    });*/
  }

  ngOnDestroy(): void {
   // this.firstObsSubs.unsubscribe();
  }
}
