import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: ToDo[] = [];
  newTodo: ToDo = {} as ToDo;

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos(): void {
    this.toDoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      }
    });
  }
createTodo(): void {
    const newTodo: ToDo = {
      id: this.newTodo.id,
      title: this.newTodo.title,
      completed: this.newTodo.completed
    };

    this.toDoService.craeteTodo(newTodo).subscribe({
      next: (todo) => {
        this.todos.push(todo);
        this.newTodo = {} as ToDo;
      }
    });
}

deleteTodo(todoId: number): void {
  this.toDoService.deleteToDo(todoId.toString()).subscribe(() => {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  });
}
}
