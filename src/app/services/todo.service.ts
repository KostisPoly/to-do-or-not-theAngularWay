import { Injectable } from '@angular/core';
import demoTodo from '../../assets/toDo.json'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
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
  postMove(todo: Todo):Observable<any> {
    console.log(todo);
    return this.httpClient.post<any>(this.REST_API_SERVER+'/move', todo, httpOptions);
  }
}
