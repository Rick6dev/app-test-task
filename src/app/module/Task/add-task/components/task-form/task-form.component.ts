import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/services/messageService/message-service.service';
import { TaskService } from 'src/app/services/TaskService/task.service';
interface Task {
  idTask: number;
  state: number;
  titleTask:string;
}
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css', './button.component.css'],
})
export class TaskFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public messageService: MessageServiceService,
    public taskService: TaskService
  ) {}
  forma: any;
  tasks: Task[] = [];

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    const tareas = localStorage.getItem('tareas');
    if (tareas) {
      this.tasks = JSON.parse(tareas) || [];
    }
    this.forma = this.fb.group({
      idTask: [0],
      titleTask: ['', [Validators.required, Validators.minLength(3)]],
      state: [0, Validators.required],
    });
  }

  saveTask() {
    this.taskService.saveTask(this.forma);
    this.router.navigate(['/tasks']);
  }

  // Validaciones de Formularios
  get nombreInformeNoValido() {
    return (
      this.forma.get('titleTask').invalid && this.forma.get('titleTask').touched
    );
  }
  get nombreInformeValido() {
    return (
      this.forma.get('titleTask').valid && this.forma.get('titleTask').touched
    );
  }
}
