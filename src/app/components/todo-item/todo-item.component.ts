import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() moveEvent: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    
    this.todoService.postMove(todo).subscribe(todo => console.log(todo));
    this.moveEvent.emit(todo);

  }

  onDelete(todo) {
    console.log("Delete this: "+todo);
  }
}
