import { Injectable } from '@angular/core';
import demoTodo from '../../assets/toDo.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private REST_API_SERVER = "http://localhost:4201";
  constructor(private httpClient: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.REST_API_SERVER+'/todos');
  }
  getNotTodos():Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.REST_API_SERVER+'/not-todos');
  }
}
