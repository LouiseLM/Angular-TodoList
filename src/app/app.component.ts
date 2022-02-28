import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TaskModel } from './shared/general.model';
import { fromEvent, Observable, Subscriber, Subscription } from 'rxjs'

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

  todoListAdd(s:string): void {
    this.todoList.push(new TaskModel(s));
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
