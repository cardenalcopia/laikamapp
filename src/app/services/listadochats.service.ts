import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Chats } from '../models/chats';
import { Conversacion } from '../models/conversacion';
import { Chats } from '../models/chats';

@Injectable({
  providedIn: 'root'
})
export class ListadochatsService {
  private url:string;
  public michat :Chats[];
  public mititulo:string;
  public conversacion:Conversacion[]
  public miIdchat:number;
  constructor(private http:HttpClient) { }
  getChats(id_usuario:number):Observable<object>{
    this.url="https://laikamappback.herokuapp.com/listado-chats"
    return this.http.get(this.url+"?id_usuario="+id_usuario);
  }
  getOnechat(id_chat:number):Observable<object>{
    this.url="https://laikamappback.herokuapp.com/chats"
    return this.http.get(this.url+"?id_chat="+id_chat);
  }
  addConversacion(newcConversacion:Conversacion)
  {
    this.url="https://laikamappback.herokuapp.com/chats"
    return this.http.post(this.url,newcConversacion)
  }
}
