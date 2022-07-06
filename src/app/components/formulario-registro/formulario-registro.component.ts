import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;
  public passwordTwo: string;

  constructor(public router: Router) { 
    this.usuario = new Usuario(null, null, null, null, null);
  }

  ngOnInit(): void {
  }

  registrarse(){

      if(this.usuario.password == this.passwordTwo){

        this.router.navigateByUrl('/login');

      }
      else{
        console.log('Las contraseñas no coinciden');
      }

  }

}
