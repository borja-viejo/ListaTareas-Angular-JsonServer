import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private mostrarAgregarTarea: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAgregarTarea(): void {
    this.mostrarAgregarTarea = !this.mostrarAgregarTarea;
    this.subject.next(this.mostrarAgregarTarea);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
