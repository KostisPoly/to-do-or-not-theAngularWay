import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../models/Todo'
@Component({
  selector: 'app-not-todo-item',
  templateUrl: './not-todo-item.component.html',
  styleUrls: ['./not-todo-item.component.scss']
})
export class NotTodoItemComponent implements OnInit {
  @Input() ntodo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(ntodo) {
    console.log("Move to to-dos");
  }

  onDelete(ntodo) {
    console.log("Delete this: "+ntodo);
  }
}
