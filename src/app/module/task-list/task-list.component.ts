import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from '@angular/router';
import { MessageServiceService } from 'src/app/services/messageService/message-service.service';
import { TaskService } from 'src/app/services/TaskService/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css','./cards.component.css']
})
export class TaskListComponent implements OnInit{
  constructor(private fb :FormBuilder,private taskService:TaskService,private router:Router,public messageService:MessageServiceService,private cdr:ChangeDetectorRef){

  }
  filteredItems: any = [];
  selectedStatus: any = '2';
  forma:any;
  state:string='0';
  ngOnInit(): void {
    this.getTasks()
  }
tasks:any=[]
tasksAll:any=[];
getTasks(){
  this.tasksAll=this.taskService.getTasks();
  this.tasks=this.taskService.getTasks();
}

changeState(id:number):void{
this.taskService.changeState(id);
this.tasks=this.taskService.getFilteredTasks();
this.cdr.detectChanges();
}
filterItems(selectedStatus:any) {
this.selectedStatus=selectedStatus;
this.tasks=this.taskService.filterItems(selectedStatus);
this.cdr.detectChanges();
}
}
