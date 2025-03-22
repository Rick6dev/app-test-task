import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //if you use forms
import { TaskFormRoutingModule } from './task-form-routing.module';
import { PipeStateTaskPipe } from 'src/app/pipe/pipeStateTask/pipe-state-task.pipe';

@NgModule({
  declarations: [
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskFormRoutingModule,ReactiveFormsModule
  ],
  exports: [
    TaskFormComponent // Exporta TaskFormComponent
  ]
})
export class TaskFormModule { }