import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeStateTaskPipe } from 'src/app/pipe/pipeStateTask/pipe-state-task.pipe';



@NgModule({
  declarations: [TaskListComponent,PipeStateTaskPipe],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    ReactiveFormsModule,FormsModule
  ],
  exports:[FormsModule]
})
export class TaskListModule { }
