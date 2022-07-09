import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor( public router: Router ) {
    this.usuario = new Usuario(null, null, null, null, null);
   }

   registro(){
     this.router.navigateByUrl('/registro');
   }

   login(){

    let dataError = false;

    if( dataError == false ){
      this.router.navigateByUrl('/home');
    }
     
   }

  ngOnInit(): void {
  }

}
