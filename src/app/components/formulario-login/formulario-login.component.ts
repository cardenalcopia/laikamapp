import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(public apiService:UsuarioService, public router: Router ) {
    this.usuario = new Usuario(null, null, null, null, null, null);
   }

   registro(){
     this.router.navigateByUrl('/registro');
   }

   login(){

    let inicioSesion = new Usuario (null,null, null, this.usuario.correo, null, this.usuario.password)
    this.apiService.login(inicioSesion).subscribe((data:any) => 
    {
      this.apiService.usuario1 = data.result[0];
      
      if(data.error == false){
        this.apiService.logueado = true;
        this.router.navigateByUrl('/home')
        console.log("apiService con data error false");
        console.log(this.apiService);
        
      }
      
    })
    console.log("Inicio Sesión correcto o");
     
   }

  ngOnInit(): void {
  }

}
