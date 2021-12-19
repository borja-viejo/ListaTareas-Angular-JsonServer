import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lista de tareas';

  mostrarAgregarTarea: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.mostrarAgregarTarea = value);
  }

  ngOnInit(): void {}

  toggleAgregarTarea() {
    this.uiService.toggleAgregarTarea();
  }
}
