import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class SeriesService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private listaSeries: Subject<any> = new Subject<any>();
  private offset = 0;

  constructor(private ajax:Http) { }

  series(){
    let hash = Md5.hashStr(1+this.privatek+this.publick);
    let enlace = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey="
    + this.publick + "&hash=" + hash+"&offset="+this.offset+"&limit=100&titleStartsWith=a";
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => this.listaSeries.next(data.data.results),
                  error=> console.log(error),
                  ()=>console.log("fin")
    );
  }

  obtenerSeries(){
    this.series();
    return this.listaSeries.asObservable();
  }
}