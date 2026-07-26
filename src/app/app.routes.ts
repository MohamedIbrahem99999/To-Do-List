import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'todos', component: TodosComponent, title: 'todos' },
  { path: 'todos/:id',component: TodoDetailsComponent},
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

];
