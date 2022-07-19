import { Injectable } from '@angular/core';
import {Actividades} from '../models/actividades'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apuntadas } from '../models/apuntadas';
@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  public actividades:Actividades[];
  private url:string;
  public actividad:Actividades;
  public actividadinfo:Actividades;
  public actividadmodificar :Actividades;
  public actividadesCreadas: Actividades[];
  public cardsModal:Actividades;
  public actividadesDisponibles:Actividades[];
  
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
  getOneCreada(id_actividad:number)
  {
    this.url="http://localhost:3000/modificar?id_actividad="+id_actividad
    return this.http.get(this.url)
  }
  putCreada(actividad:Actividades)
  {
    this.url="http://localhost:3000/modificar"
    return this.http.put(this.url,actividad)
  }
  getAllCreadas(id_creador:number)
  {
    this.url="http://localhost:3000/creadas"
    return this.http.get(this.url+"?id_creador="+id_creador)
  }
  getAllApuntadas(id_usuario:number)
  {
    this.url="http://localhost:3000/apuntadas"
    return this.http.get(this.url+"?id_usuario="+id_usuario)
  }
  postApuntarse(apuntada:Apuntadas):Observable<object>
  {
    console.log(apuntada);
    
    this.url="http://localhost:3000/actividadCard"
    return this.http.post(this.url,apuntada)
  }
  deleteApuntadas(id_actividades:number, id_usuario:number){

    this.url="http://localhost:3000/apuntadas"
    return this.http.delete(this.url +"?id_actividades=" + id_actividades + "&id_usuario=" + id_usuario)
  }
  // putDiponibles(disponibles:Actividades){

  //   this.url = "http://localhost:3000/actividadCard"
  //   return this.http.put(this.url, disponibles)
  // }
}
