import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  //service (singleton)
  private todoService:TodoService ;

  constructor(private service: TodoService){
    this.todoService = service;
  }
  
  //the array of todo
  public todos: Todo[] = [];

  ngOnInit(): void {
    //getting the list of todos
    this.todos = this.todoService.getList();
  }

  //removing the todo from the array by id
  deletingTodo(id:number){
    this.todos = this.todoService.delete(id);
  }

  //completing a todo item by id
  completingTodo(id:number){
    this.todoService.complete(id);
  }
}
