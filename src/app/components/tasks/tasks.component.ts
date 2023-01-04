import { Component, Input } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  @Input() task!: Task;

}
