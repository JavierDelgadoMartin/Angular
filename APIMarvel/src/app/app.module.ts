import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';
import { ComicsService } from './comics.service';
import { AlertModule } from 'ng2-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import {PersonajesService} from "./personajes.service";
import {SeriesService} from "./series.service";
import { DetallePersonajeComponent} from './detalle-personaje/detalle-personaje.component';
import { FiltroPipe } from './filtro.pipe';
import { DetalleComicComponent } from './detalle-comic/detalle-comic.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component';


const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  {path: "personajes", component: PersonajesComponent},
  {path: "series", component: SeriesComponent},
  {path: "comics", component: ComicsComponent},
  {path: "detalleP", component: DetallePersonajeComponent},
  {path: "detalleC",component:DetalleComicComponent},
  {path: "detalleS",component:DetalleSerieComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PersonajesComponent,
    SeriesComponent,
    ComicsComponent,
    PieComponent,
    MenuComponent,
    PrincipalComponent,
    PersonajesComponent,
    DetallePersonajeComponent,
    FiltroPipe,
    DetalleComicComponent,
    DetalleSerieComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ComicsService,PersonajesService,SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
