import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todos => todos.id !==id );
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    console.log('5555');        
    let todo = this.getTodoById(id);
    if(!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    console.log('6666');        
    return this.todos.filter(todo => todo.id == id).pop();
  }

  toggleTodoComplete(todo: Todo){
    console.log('4444');        
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
