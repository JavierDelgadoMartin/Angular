import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContenedorSuperiorComponent } from './contenedor-superior/contenedor-superior.component';
import { ContenedorInferiorComponent } from './contenedor-inferior/contenedor-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ContenidoComponent,
    ContenedorSuperiorComponent,
    ContenedorInferiorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
