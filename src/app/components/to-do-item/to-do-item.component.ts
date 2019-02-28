import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {  TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
 /// Set Dynamic Classes
 setClasses() {
   let classes = {
     todo: true,
     'is-complete': this.todo.completed
   }
   return classes;
  }
 onToggle(todo) {
   // Toggle in UI
   todo.completed = !todo.completed;
   // toggle on server
   this.todoService.toggoleCompleted(todo).
   subscribe(todo => console.log(todo));
   
 }
 onDelete(todo) {
  this.deleteTodo.emit(todo);
}
}