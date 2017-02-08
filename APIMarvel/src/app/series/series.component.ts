import { Component, OnInit } from '@angular/core';
import {SeriesService} from "../series.service";
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  private listaSeries;

  constructor(private api:SeriesService) { }

  ngOnInit() {
        this.api.obtenerSeries().subscribe(
      data => {this.listaSeries = data;console.log(this.listaSeries)});
  }

}
