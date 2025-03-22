import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskFormModule } from './module/task-form/task-form.module'; // Importa el modulo
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './module/task-list/task-list.component';
import { PipeStateTaskPipe } from './pipe/pipeStateTask/pipe-state-task.pipe';
import { NavigationComponent } from './module/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
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

