import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;
  public passwordTwo: string;

  constructor(public router: Router, private toastr: ToastrService) { 
    this.usuario = new Usuario(null, null, null, null, null);
  }

  ngOnInit(): void {
  }

  registroSuccess(){
    this.toastr.success('Asuario creado satisfactoriamente');
  }

  registrarse(){

      if(this.usuario.password == this.passwordTwo){

        this.router.navigateByUrl('/login');

        this.registroSuccess();

      }
      else{
        console.log('Las contraseñas no coinciden');
      }

  }

}
