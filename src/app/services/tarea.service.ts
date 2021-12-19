import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../Tarea';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl = 'http://localhost:5000/tareas'

  constructor(private http: HttpClient) { }

  getTareas() : Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  deleteTarea(tarea: Tarea): Observable<Tarea> {
    const url = `${this.apiUrl}/${tarea.id}`;
    return this.http.delete<Tarea>(url);
  }

  updateTareaRecordatorio(tarea: Tarea): Observable<Tarea> {
    const url = `${this.apiUrl}/${tarea.id}`;
    return this.http.put<Tarea>(url, tarea, httpOptions);
  }

  addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea, httpOptions);
  }
}
