import { Component, Input, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.css']
})
export class DetalleActividadComponent implements OnInit {
  public card:Actividades;
  @Input() detalle: Actividades;

  constructor(public router: Router, private toastr: ToastrService,public actividadService:ActividadesService) 
  {
    this.card=actividadService.actividadinfo

   }

  ngOnInit(): void {
  }

  showSuccess(){
    this.toastr.success('Te has apuntado a esta actividad', 'Enhorabuena!!!');
  }

  apuntadas(){
    this.router.navigateByUrl('/apuntadas');

    this.showSuccess();
  }

  
}
