import { Injectable } from '@angular/core';
import {Actividades} from '../models/actividades'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apuntadas } from '../models/apuntadas';
import { Usuario } from '../models/usuario';
import { Chats } from '../models/chats';
@Injectable({
  providedIn: 'root'
})
export class ListadochatsService {
  private url:string;
  public milistado:Chats;

  constructor(private http:HttpClient) { }
  postChats(chats:Chats):Observable<object>
  {
    this.url="http://localhost:3000/actividadCard"
    return this.http.post(this.url,chats)
  }
}
