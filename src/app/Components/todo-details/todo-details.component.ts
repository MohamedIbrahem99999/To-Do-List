import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../Services/to-do.service';
import { ToDo } from '../../Models/to-do';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  todo: ToDo | undefined;
input: any;
  constructor(private route: ActivatedRoute, private toDoService: ToDoService, private router: Router) {}


  ngOnInit(): void {
   this.getTodo();
  }

  getTodo(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.toDoService.getToDoById(id).subscribe({
      next: (todo) => {
        this.todo = todo;
      }
    });
  }
  
  updateTodo(): void {
    if(this.todo){
      this.toDoService.updateToDo(this.todo).subscribe(() => {
        this.router.navigate(['/todos']);
      });
    }
     

}
}