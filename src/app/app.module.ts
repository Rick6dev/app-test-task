import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskFormModule } from './module/Task/add-task/components/task-form/task-form.module'; // Importa el modulo
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './module/Task/task-list/task-list.component';
import { PipeStateTaskPipe } from './pipe/pipeStateTask/pipe-state-task.pipe';
import { NavigationComponent } from './module/navigation/navigation.component';
import { AddTaskComponent } from './module/Task/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskFormModule, // Asegurate que TaskFormModule no tenga errores.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

