import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskListModule { }
