import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.css']
})
export class FormularioPerfilComponent implements OnInit {
  public passwordantiguo:string;
  public repetirPassword:string;
public user :Usuario
  constructor(public usuarioService:UsuarioService) { this.user=this.usuarioService.usuario1}
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
})
  }
  else
  {
    console.log("Comprueba los campos password")
  }
  
}
  ngOnInit(): void {


  }

}
