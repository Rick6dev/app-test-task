import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageServiceService } from '../messageService/message-service.service';
interface Task {
  idTask: number;
  state: number;
  titleTask:string;
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksAll: Task[] = [];

  constructor(private messageService:MessageServiceService) { }
  getTasks(): Task[] {
    const tareas = localStorage.getItem('tareas');
    if (tareas) {
      this.tasks = JSON.parse(tareas) || [];
      this.tasksAll = [...this.tasks]; 
    }
    return this.tasks;
  }

  changeState(id: number): void {
    const taskOne = this.tasks.find((task: Task) => task.idTask === id);
    if (taskOne) {
      console.log(taskOne);
      taskOne.state = taskOne.state === 0 ? 1 : 0;
      this.tasks = [...this.tasks]; 
      localStorage.setItem('tareas', JSON.stringify(this.tasks));
    }
  }

  filterItems(selectedStatus: string): Task[] {
    const selectedTerm = parseInt(selectedStatus);
    if (selectedStatus === '2') {
      this.tasks = [...this.tasksAll]; 
    } else {
      this.tasks = this.tasksAll.filter((task: Task) => task.state === selectedTerm);
    }
    return this.tasks;
  }


  getFilteredTasks(): Task[] {
    return this.tasks;
  }


  saveTask(forma: FormGroup): void {

    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        if (control instanceof FormControl || control instanceof FormGroup) {
          control.markAsTouched();
        }
      });
      this.messageService.MessageAlertError("Todos los campos son obligatorios", "Estimado usuario!");
      return;
    }

    let tareasString = localStorage.getItem('tareas');
    if (tareasString) {
      let tareas = JSON.parse(tareasString) || [];
      // Resto de tu código

      let nuevoId = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].idTask + 1 : 1; 

      let nuevaTarea = {
        idTask: nuevoId,
        titleTask: forma.value.titleTask,
        state: forma.value.state
      };
  console.log(tareas )
      this.tasks.push(nuevaTarea); 
      localStorage.setItem('tareas', JSON.stringify(this.tasks)); 
    }
   
else{
  let nuevaTarea = {
    idTask: 1,
    titleTask: forma.value.titleTask,
    state: forma.value.state
  };
  this.tasks.push(nuevaTarea);
  console.log(this.tasks)
  localStorage.setItem('tareas', JSON.stringify(this.tasks));

}
  this.messageService.MessageAlertSuccess("La Tarea fue registrada satifactoriamente","Estimado Usuario!")
  }
  
}
