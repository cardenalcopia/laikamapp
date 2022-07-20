import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = "http://localhost:3000/";
  public logueado:boolean = false;
  public usuario1:Usuario;
  public usuarioVotacion:Rating[];

  constructor(private http: HttpClient) { }

  register(usuario:Usuario){

    console.log("----------");
    console.log(usuario);
  
    return this.http.post(this.url + "registro", usuario)

  }
  login(usuario:Usuario){

    console.log(usuario);
    this.usuario1=usuario;
    return this.http.post(this.url + "login", usuario)
  }
  getMostarPerfil(id_usuario:number)
  {
    this.url="http://localhost:3000/prefil?id_usuario="+id_usuario
    return this.http.get(this.url)
  }
  putPerfil(user1:Usuario)
  {
    this.url="http://localhost:3000/perfil"
    return this.http.put(this.url,user1)
  }
  getVotaciones(id_usuario:number):Observable<Object>{
    
    return this.http.get(this.url+"pipicanCard?id_usuario="+id_usuario)
  }

}
