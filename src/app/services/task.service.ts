import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _apiUrl = 'http://localhost:5500/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this._apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
