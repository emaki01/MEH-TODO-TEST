import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //list of todo
  private todos:Todo[] = [];

  //constructor (singleton service)
  constructor(@Optional() @SkipSelf() parent?: TodoService) {
    if (parent) {
      throw Error(
        `[TodoService]: trying to create multiple instances, but is a singleton.`
      );
    }

    //getting the fake todos array if it's empty (first call)
    this.todos = this.initTodos();
  }

  //init todo's array (case all items deleted do not reinit)
  initTodos():Todo[]{
    if(this.todos.length === 0){
      this.todos = [
        {
          id: 1,
          text: "First item 01",
          createdAt: 1701072135,
          completed: true
        },
        {
          id: 2,
          text: "Second item 02",
          createdAt: 1701072205,
          completed: false
        },
        {
          id: 3,
          text: "Third item 03",
          createdAt: 1701072212,
          completed: false
        }
      ];
    }
    return this.todos;
  }

  //getting the complete list of todos
  getList():Todo[]{
    //return the todos array even if empty because all todo items are deleted
    return this.todos;
  }

  //removing the todo from the array by id
  delete(id:number):Todo[]{
    //update the todos array without the deleted id item
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }

  //completing a todo item
  complete(id:number){
    let todo = this.todos.find(t => t.id === id);
    //if exist set completed
    if(todo !== undefined && todo !== null){
      todo.completed = true;
    }
  }

  //save a todo item
  save(text: string){
    let length:number = this.todos.length;
    //text value is not empty
    if(text != null && text != ''){
      let todo:Todo = {
        //set last id
        id: length+1,
        //set text
        text: text,
        //set timestamp
        createdAt: Math.floor(Date.now() / 1000),
        completed: false
      };
      
      //make sure the todo list is complete
      this.getList();
      //push in fake todo array
      this.todos.push(todo);
    }
    //error if not saved
    if(this.todos.length <= length){
      throw Error(
        `[TodoService]: the new todo item wasn't save.`
      );
    }
  }
}
