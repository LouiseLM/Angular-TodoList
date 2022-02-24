import { AfterViewInit, Component } from '@angular/core';
import { TaskModel } from './shared/general.model';
import { fromEvent } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'to-do-list';
  todoList:Array<TaskModel> = [];
  task:string = '';

  todoListAdd(s:string): void {
    this.todoList.push(new TaskModel(s));
  }

  ngAfterViewInit(): void {
    const button = document.getElementById("addButton") as HTMLElement;

    const myObservable = fromEvent(button, 'click');

    const subscription = myObservable.subscribe(event => this.todoListAdd(this.task));
  }
}
