import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  //service (singleton)
  private todoService:TodoService ;

  constructor(private service: TodoService){
    this.todoService = service;
  }

  saveNewTodo(todotext:string){ 
    //call the service to create this item
    this.todoService.save(todotext);
    
  }
}
