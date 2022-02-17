import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../shared/general.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList:Array<TaskModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
