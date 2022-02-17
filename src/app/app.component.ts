import { Component } from '@angular/core';
import { TaskModel } from './shared/general.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  todoList:Array<TaskModel> = [];
  task:string = '';

  todoListAdd(s:string): void {
    this.todoList.push(new TaskModel(s));
  }
}
