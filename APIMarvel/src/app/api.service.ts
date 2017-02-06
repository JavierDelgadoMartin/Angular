import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class ApiService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private ts=1;
  private url = "http://gateway.marvel.com";

  constructor(private ajax:Http) {

  }

  metodo(link,offset){
    console.log("mojon");
    let hash = Md5.hashStr(this.ts+this.privatek+this.publick);
    let enlace = this.url + link + "?ts=" + this.ts + "&apikey=" + this.publick + "&hash=" + hash+"&offset="+offset;
    console.log(enlace);
    this.ajax.get(enlace).subscribe(
      data=> console.log(data.json()),
      error=> console.log(error),
      ()=>console.log("fin")
    );
  }
}