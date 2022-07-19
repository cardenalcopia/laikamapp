import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Chats } from '../models/chats';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListadochatsService {
  private url:string;

  constructor(public usuarioservice:UsuarioService,private http:HttpClient) { }
  getChats(usuario:number):Observable<object>{
    this.url="http://localhost:3000/listado-chats"
    return this.http.get(this.url+"?id_usuario="+usuario);
  }
}
