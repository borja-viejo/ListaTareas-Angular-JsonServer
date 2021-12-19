import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Tarea } from '../../Tarea';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  @Output() onGuardarTarea: EventEmitter<Tarea> = new EventEmitter();

  texto: string;
  fecha: string;
  hora: string;
  recordatorio: boolean = false;

  mostrarAgregarTarea: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.mostrarAgregarTarea = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.texto) {
      alert('Por favor, añade una Tarea');
      return;
    }

    const newTarea = {
      texto: this.texto,
      fecha: this.fecha,
      hora: this.hora,
      recordatorio: this.recordatorio
    }

    this.onGuardarTarea.emit(newTarea);

    this.texto = '';
    this.fecha = '';
    this.hora = '';
    this.recordatorio = false;
  }
}
