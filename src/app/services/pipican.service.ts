import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pipican } from '../models/pipican';

@Injectable({
  providedIn: 'root'
})
export class PipicanService {
  public pipicanes:Pipican;
  private url:string = "http://localhost:3000/";
  

  constructor(private http: HttpClient) { }

  getAllPipi(){
    
    return this.http.get(this.url+"cards-pipicanes");
  }


}
