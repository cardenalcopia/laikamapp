import { Component, Input, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Apuntadas } from 'src/app/models/apuntadas';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  public card:Actividades;
  @Input() detalle: Actividades;

   
  constructor(
    public router: Router, 
    private toastr: ToastrService,
    public actividadService:ActividadesService,
    public placesService: PlacesService,
    public usuarioService:UsuarioService
    ) 
  {
    this.card=actividadService.actividadinfo
   }

   
  ngOnInit(): void {
  }

  showSuccess(){
    this.toastr.success('Te has apuntado a esta actividad', 'Enhorabuena!!!');
  }

  apuntadas(){
    let miapuntada :Apuntadas= new Apuntadas(null,this.actividadService.actividadinfo.id_actividades,this.usuarioService.usuario1.id_usuario)
       console.log("esto se merece un 10 y una Kevin Bacon");
       
      this.actividadService.postApuntarse(miapuntada)
        .subscribe((data:Apuntadas)=>{
      console.log(data)
     
    })
    
    this.router.navigateByUrl('/apuntadas');

    this.showSuccess();
  }

  
}
