import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario(null, null, null, null, null);
   }

   login(){
     
   }

  ngOnInit(): void {
  }

}
