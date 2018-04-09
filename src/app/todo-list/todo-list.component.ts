import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todo";
import { PaginatePipe, PaginationService } from 'ng2-pagination';


@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  name: string = '';
  @Input() todos: Todo[];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onToggleTodoComplete(todo: Todo) {
    console.log('asdsa');
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
