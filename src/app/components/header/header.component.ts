import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 title: string = 'Task Tracker';
 showAddTask!: boolean;
 subscription!: Subscription;

 constructor(private _uiService: UiService, private _router: Router ) {
  this.subscription = this._uiService.onToggleShowAddTask()
    .subscribe((value) => (
      this.showAddTask = value
  ));
 }

 toggleAddTask() {
  this._uiService.toggleShowAddTask();
 }

 hasRoute(route: string) {
  return this._router.url === route;
 }
}
