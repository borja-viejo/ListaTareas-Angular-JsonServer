import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ButtonComponent } from './components/button/button.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareaItemComponent } from './components/tarea-item/tarea-item.component';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    ButtonComponent,
    TareasComponent,
    TareaItemComponent,
    AgregarTareaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
