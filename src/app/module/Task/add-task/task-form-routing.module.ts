import {RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddTaskComponent } from "./add-task.component";



const routes :Routes=[{path:'',component:AddTaskComponent}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AddTaskComponentModule{}