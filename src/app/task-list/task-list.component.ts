import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void {

  }

tasks: Task[] = [
    new Task("Vist Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Go to the party")
  ] 

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure you want to remove the following task? \n "${existingTask.title}"`)
    
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask)
    } 
  }

  
}

class Task {

  constructor(public title: string) {

  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;

}

