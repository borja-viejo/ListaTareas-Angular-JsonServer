import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService
      .getTareas()
      .subscribe((tareas) => (this.tareas = tareas));
  }

  eliminarTarea(tarea: Tarea) {
    this.tareaService
      .deleteTarea(tarea)
      .subscribe(
      () => (this.tareas = this.tareas.filter(t => t.id !== tarea.id))
    );
  }

  toggleRecordatorio(tarea: Tarea) {
    tarea.recordatorio = !tarea.recordatorio;
    this.tareaService
      .updateTareaRecordatorio(tarea)
      .subscribe();
  }

  agregarTarea(tarea: Tarea) {
    this.tareaService
      .addTarea(tarea)
      .subscribe((tarea) => this.tareas.push(tarea));
  }
}
