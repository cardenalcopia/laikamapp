import { Component, Input, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Apuntadas } from 'src/app/models/apuntadas';
import { PlacesService } from '../../services/places.service';
import { ActividadesUsuario } from 'src/app/models/actividades-usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  public card:Actividades;
  @Input() detalle: Actividades;

  public apuntar:boolean = true;
   
  constructor(
    public router: Router, 
    private toastr: ToastrService,
    public actividadService:ActividadesService,
    public placesService: PlacesService,
    public usuarioService:UsuarioService,
    ) 
  {
    this.card=actividadService.actividadinfo
    
      this.actividadService.getAllApuntadas(this.usuarioService.usuario1.id_usuario)
      .subscribe((data:ActividadesUsuario[])=>{
    
      this.actividadService.actividadesUsuario = data;
      console.log(this.actividadService.actividadesUsuario);
      
      if(this.actividadService.actividadesUsuario.length>0){
        for(let i = 0; i<this.actividadService.actividadesUsuario.length; i++){
          if(this.actividadService.actividadesUsuario[i].id_actividades == this.card.id_actividades){
              this.apuntar = false
          }
        }
      }
    })

   }

   
  ngOnInit(): void {
  }

  showSuccess(){
    this.toastr.success('Te has apuntado a esta actividad', 'Enhorabuena!!!');
  }

  apuntadas(id:number){
    let miapuntada :Apuntadas= new Apuntadas(null,this.actividadService.actividadinfo.id_actividades,
                                              this.usuarioService.usuario1.id_usuario,
                                              this.usuarioService.usuario1.num_perros,this.actividadService.actividadinfo.id_creador,
                                              this.actividadService.actividadinfo.titulo) 
       
      this.actividadService.postApuntarse(miapuntada)
        .subscribe((data:any)=>{
      console.log(data)
     
    })
    
    this.router.navigateByUrl('/home');

    // this.showSuccess();

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
      title: 'Apuntado satisfactoriamente'
    })
  }

  
}
