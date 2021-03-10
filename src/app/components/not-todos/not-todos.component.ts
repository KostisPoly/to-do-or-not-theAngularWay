import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-not-todos',
  templateUrl: './not-todos.component.html',
  styleUrls: ['./not-todos.component.scss']
})
export class NotTodosComponent implements OnInit {
  ntodos: Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
      this.todoService.getNotTodos().subscribe(ntodos => {
      this.ntodos = ntodos;
    });
  }

  moveEvent(ntodo) {
    console.log(ntodo);
    this.todoService.getNotTodos().subscribe(ntodos => {
      this.ntodos = ntodos;
      location.reload();
    });
  }
}
