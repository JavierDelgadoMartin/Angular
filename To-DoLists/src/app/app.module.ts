import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsarServicioComponent } from './usar-servicio/usar-servicio.component';
import { ServicioPruebaService } from './servicio-prueba.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UsarServicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    providers: [ServicioPruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
