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
  public actividadinfo:Actividades;
  
  constructor(private http:HttpClient) { }
  getAll(tipo:string):Observable<object>{
    this.url="http://localhost:3000/cards-actividades"
    return this.http.get(this.url+"?tipo="+tipo);
  }
  addActividad(newActivity:Actividades)
  {
    this.url="http://localhost:3000/crear"
    return this.http.post(this.url,newActivity)
  }
  getOneatividad(id_actividad:number)
  {
    this.url="http://localhost:3000/actividadCard?id_actividad="+id_actividad
    return this.http.get(this.url)
  }
}
