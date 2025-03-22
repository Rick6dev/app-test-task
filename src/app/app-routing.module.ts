import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'add-task', pathMatch: 'full' },
  {path:'add-task',loadChildren:()=>import('./module/Task/add-task/add-task.module').then((m)=>m.AddTaskModule)},
  {path:'tasks',loadChildren:()=>import('./module/Task/task-list/task-list.module').then((m)=>m.TaskListModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
