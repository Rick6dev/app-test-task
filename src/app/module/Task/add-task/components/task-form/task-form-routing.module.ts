import {RouterModule, Routes } from "@angular/router";
import { TaskFormComponent } from "./task-form.component";
import { NgModule } from "@angular/core";



const routes :Routes=[{path:'',component:TaskFormComponent}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TaskFormRoutingModule{}