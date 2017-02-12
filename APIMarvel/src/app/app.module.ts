import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicsComponent } from './comics/comics.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { AlertModule } from 'ng2-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import { DetallePersonajeComponent} from './detalle-personaje/detalle-personaje.component';
import { FiltroPipe } from './filtro.pipe';
import { DetalleComicComponent } from './detalle-comic/detalle-comic.component';
import { EventoComponent } from './evento/evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import {AjaxService} from "./ajax.service";

const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'inicio', component: PrincipalComponent },
  {path: "personajes", component: PersonajesComponent},
  {path: "comics", component: ComicsComponent},
  {path: "eventos", component: EventoComponent},
  {path: "detalleE/:id", component: DetalleEventoComponent},
  {path: "detalleP/:id", component: DetallePersonajeComponent},
  {path: "detalleC/:id",component:DetalleComicComponent},
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PersonajesComponent,
    ComicsComponent,
    PieComponent,
    MenuComponent,
    PrincipalComponent,
    PersonajesComponent,
    DetallePersonajeComponent,
    FiltroPipe,
    DetalleComicComponent,
    EventoComponent,
    DetalleEventoComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
