import { Component, Input, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  @Input() task!: Task;

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this._taskService
      .deleteTask(task)
      .subscribe(() => (
      this.tasks = this.tasks.filter((item) => item.id !== task.id
    )));
  };

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this._taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this._taskService.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ));
  }
}
