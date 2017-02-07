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

const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  {path: "personajes", component: PersonajesComponent},
  {path: "series", component: SeriesComponent},
  {path: "comics", component: ComicsComponent}
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
    PrincipalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
