import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(public apiService:UsuarioService, public router: Router, private toastr: ToastrService) {
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
        console.log("apiService con data error false");
        console.log(this.apiService);
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
          title: 'Usuario Correcto'
        })
        this.router.navigateByUrl('/home')
        
      }else{
        // this.toastr.error('Correo o Password incorrectos');
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
          icon: 'error',
          title: 'Correo o Password incorrectos'
        })
      }
      
    })
    console.log("Inicio Sesión correcto");
     
   }

  ngOnInit(): void {
  }

}
