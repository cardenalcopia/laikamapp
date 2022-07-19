import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadochatsService {
  private url:string;
  constructor(private http:HttpClient) { }
  getChats(id_usuario:number):Observable<object>{
    this.url="http://localhost:3000/listado-chats"
    return this.http.get(this.url+"?id_usuario="+id_usuario);
  }
}
