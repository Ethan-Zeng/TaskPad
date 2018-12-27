import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHeaderComponent } from './task-header/task-header.component';

@NgModule({
  declarations: [TaskHomeComponent, TaskListComponent, TaskHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
