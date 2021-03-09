import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    console.log("Move to not todo");
  }

  onDelete(todo) {
    console.log("Delete this: "+todo);
  }
}
