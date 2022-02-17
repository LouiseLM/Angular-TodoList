import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/general.model';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() task:TaskModel = {} as TaskModel;

  doneTask(o:TaskModel): void {
    o.done = !o.done;
  }

}
