import { Injectable } from '@angular/core';
import {Actividades} from '../models/actividades'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  public actividades:Actividades[];
  private url:string;
  public actividad:Actividades;

  constructor(private http:HttpClient) { }
  getAll(tipo:string):Observable<object>{
    this.url="http://localhost:3000/cards-actividades"
    return this.http.get(this.url+"?tipo="+tipo);
  }
}
