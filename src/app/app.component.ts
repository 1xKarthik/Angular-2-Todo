import { Component } from "@angular/core";
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  providers: [],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {}

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo) {
    console.log('3333');    
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
