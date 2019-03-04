import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";

import {  Todo  } from '../models/Todo';

const HttpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://localhost:4000/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get Todos
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggoleCompleted(todo: Todo):Observable<any> {
    const URL = `${this.todosUrl}/${todo._id}`; 
    return this.http.put(URL, todo, HttpOptions);
}
//  Delete Todo Item

  deleteTodo(todo:Todo):Observable<Todo>{
    // Remove from UI
   const URL = "http://localhost:4000/" + todo._id; 
   // Remove from server
   return this.http.delete<Todo>(URL,HttpOptions);
  } 

  // Add Todo Item
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>
    (this.todosUrl, todo, HttpOptions);
  }
}
