import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor( private taskServise: TaskService) {



    this.taskServise.getTask().subscribe((tasks) => {
        this.tasks = tasks;
    });

    console.log('https://youtu.be/PFP0oXNNveg?t=3539');

  }



  ngOnInit() {
  }

}
