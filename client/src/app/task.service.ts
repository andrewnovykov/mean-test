import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient ) {
    console.log('task servise initialize');
  }

  private Url = 'http://localhost:3000/api/tasks';

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.Url);
  }

}
