import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/models/task.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  filterInput: string = "";
  taskList: TaskModel[];
  addItem: string;
  newTask: TaskModel;
  

  ngOnInit() {
    this.taskList = [
      { task: "Walk the dog", complete: false, taskClass: "taskIncomplete", isVisible: true},
      { task: "Go to the store", complete: false, taskClass: "taskIncomplete", isVisible: true},
      { task: "Get gas", complete: false, taskClass: "taskIncomplete", isVisible: true},
      { task: "Wash the car", complete: false, taskClass: "taskIncomplete", isVisible: true}
    ];
  }

  changeClass(isComplete: boolean, index: number){
    if (isComplete == false)
    {
      this.taskList[index].complete = true;
      this.taskList[index].taskClass = "taskComplete";
    } 
  }

  searchTasks(userInput: string, task: TaskModel) : boolean{
    if (task.task.toLowerCase().search(userInput.toLowerCase()) == -1) {
      return false;
    } else {
      return true;
    }
  }

  addTask(addItem: string) {
    this.newTask = { task: addItem, complete: false, taskClass: "taskIncomplete", isVisible: true };
    this.taskList.push(this.newTask);
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1);
  }

}
