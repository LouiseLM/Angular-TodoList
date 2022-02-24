import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/general.model';
import { fromEvent } from 'rxjs'

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.scss']
})
export class TodoElementComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() task:TaskModel = {} as TaskModel;

  doneTask(t:TaskModel): void {
    t.done = !t.done;
  }

  ngAfterViewInit(): void {
    const checkbox = document.getElementById("task") as HTMLElement;

    const myObservable = fromEvent(checkbox, 'click');
  
    const subscription = myObservable.subscribe(event => this.doneTask(this.task));
  }

}
