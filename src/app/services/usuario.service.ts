import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = "https://laikamappfront.herokuapp.com/";
  public logueado:boolean = false;
  public usuario1:Usuario;

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
    this.url="https://laikamappfront.herokuapp.com/prefil?id_usuario="+id_usuario
    return this.http.get(this.url)
  }

}
