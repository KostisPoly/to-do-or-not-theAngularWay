import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-not-todo-item',
  templateUrl: './not-todo-item.component.html',
  styleUrls: ['./not-todo-item.component.scss']
})
export class NotTodoItemComponent implements OnInit {
  @Input() ntodo: Todo;
  @Output() moveEvent: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onToggle(ntodo) {
    this.todoService.postMove(ntodo).subscribe(ntodo => console.log(ntodo));
    this.moveEvent.emit(ntodo);
  }

  onDelete(ntodo) {
    console.log("Delete this: "+ntodo);
  }
}
