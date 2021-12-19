import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../Tarea';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.css']
})
export class TareaItemComponent implements OnInit {
  @Input() tarea: Tarea
  @Output() onEliminarTarea: EventEmitter<Tarea> = new EventEmitter();
  @Output() onToggleRecordatorio: EventEmitter<Tarea> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEliminar(tarea: Tarea) {
    this.onEliminarTarea.emit(tarea);
  }

  onToggle(tarea: Tarea) {
    this.onToggleRecordatorio.emit(tarea);
  }
}
