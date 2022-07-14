import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;
  public repetirPassword:string;
  public coinciden:Boolean = true;

  constructor(public apiService:UsuarioService, public router: Router, private toastr: ToastrService) { 
    this.usuario = new Usuario(null,null, null, null, null, null);
  }

  ngOnInit(): void {
  }

  registroSuccess(){
    this.toastr.success('Asuario creado satisfactoriamente');
  }

  registrarse(){
    if(this.usuario.password == this.repetirPassword){
      let usuarioNuevo = new Usuario(null,this.usuario.nombre, this.usuario.apellidos, this.usuario.correo, this.usuario.num_perros, this.usuario.password)
      this.apiService.register(usuarioNuevo).subscribe((data:Usuario[]) =>
      {
        console.log(data);
        
      })
      
      console.log("Usuario Registrado");
      this.coinciden = true
      this.router.navigateByUrl('/login');
      this.registroSuccess()
  }else{
    console.log("Las contraseñas no coincicen");
    this.coinciden = false
  }
}

  //     if(this.usuario.password == this.passwordTwo){

  //       this.router.navigateByUrl('/login');

  //       this.registroSuccess();

  //     }
  //     else{
  //       console.log('Las contraseñas no coinciden');
  //     }

  // }

}
