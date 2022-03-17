import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TaskModel } from './shared/general.model';
import { fromEvent, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'to-do-list';
  todoList:Array<TaskModel> = [];
  task:string = '';
  subscription = new Subscription;
  
  //TODO make this work
  //@ViewChild('addButton')
  //addButton!: ElementRef;

  todoListAdd(s:string): void {
    this.todoList.push(new TaskModel(s));
    console.log(this.todoList)
  }

  ngAfterViewInit(): void {
    const button = document.getElementById("addButton") as HTMLElement; //viewChild

    const myObservable = fromEvent(button, 'click');

    this.subscription = myObservable.subscribe(event => this.todoListAdd(this.task));
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
