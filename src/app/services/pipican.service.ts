import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pipican } from '../models/pipican';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class PipicanService {
  public pipicanInfo:Pipican;
  private url:string = "https://laikamappfront.herokuapp.com/";
  

  constructor(private http: HttpClient) { }

  getAllPipi(){
    
    return this.http.get(this.url+"cards-pipicanes");
  }

  getCardPipi(id_pipican:number){
    return this.http.get(this.url+"pipicanCard?id_pipican="+id_pipican);
  }

  postRating(calificacion:Rating){
    return this.http.post(this.url + "pipicanCard", calificacion)
  }
  getAvg(num:number){
    return this.http.get(this.url+"pipicanCard?id_pipican="+num);
  }
  putAvg(pipican:Pipican){
    return this.http.put(this.url+"pipicanCard", pipican)
  }
}
