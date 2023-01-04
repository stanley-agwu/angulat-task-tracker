import { Component, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task!: Task;

  onToggle(task: Task) {
    console.log('onToggle task: ', task);
  }

  onDelete(task: Task) {
    console.log('deleting task: ' + task);
  }
}
