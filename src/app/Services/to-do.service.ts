import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private storageKey = 'todos';
  private platformId = inject(PLATFORM_ID);

  constructor() {}

  // فحص هل الكود يعمل داخل المتصفح أم لا
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getTodos(): ToDo[] {
    if (this.isBrowser()) {
      const todos = localStorage.getItem(this.storageKey);
      return todos ? JSON.parse(todos) : [];
    }
    return [];
  }

  saveTodos(todos: ToDo[]): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.storageKey, JSON.stringify(todos));
    }
  }

  createTodo(todo: ToDo): void {
    const todos = this.getTodos();
    todos.push(todo);
    this.saveTodos(todos);
  }

  updateTodo(updatedTodo: ToDo): void {
    const todos = this.getTodos();
    const index = todos.findIndex(t => t.id === updatedTodo.id);

    if (index !== -1) {
      todos[index] = updatedTodo;
      this.saveTodos(todos);
    }
  }

  deleteTodo(id: number): void {
    const todos = this.getTodos().filter(t => t.id !== id);
    this.saveTodos(todos);
  }
}
