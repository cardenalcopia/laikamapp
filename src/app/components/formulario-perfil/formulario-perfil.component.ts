import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.css']
})
export class FormularioPerfilComponent implements OnInit {
  public passwordantiguo:string;
  public repetirPassword:string;
public user :Usuario
  constructor(public usuarioService:UsuarioService, public toastr:ToastrService, public router:Router) { this.user=this.usuarioService.usuario1}
modificar(usuariomod:Usuario)
{
  if ((this.usuarioService.usuario1.password===this.passwordantiguo)&&(usuariomod.password===this.repetirPassword))
  {
    let miusuarionuevo:Usuario= new Usuario(usuariomod.id_usuario,usuariomod.nombre,
                                                usuariomod.apellidos,
                                                usuariomod.correo,
                                                usuariomod.num_perros,
                                                usuariomod.password)
  this.usuarioService.putPerfil(miusuarionuevo).subscribe((data:Usuario)=>{
    console.log(data)
    // this.toastr.success('Usuario modificado satisfactoriamente');
    // Toast
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Usuario modificado satisfactoriamente'
    })

    this.router.navigateByUrl('/home');
})
  }
  else
  {
    console.log("Comprueba los campos password")
    this.toastr.error('Campos de password obligatorios para poder modificar los datos del perfil');

  }
  
}
  ngOnInit(): void {


  }

}
