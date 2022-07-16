import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividades } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-card-actividades',
  templateUrl: './card-actividades.component.html',
  styleUrls: ['./card-actividades.component.css']
})
export class CardActividadesComponent implements OnInit {
  @Input() cardsPadre1:Actividades;

  constructor(public actividadService:ActividadesService,public router:Router) { }
  getCard(actividad:Actividades)
  {
    this.actividadService.actividadinfo= new Actividades(this.cardsPadre1.id_actividades,this.cardsPadre1.imagen,this.cardsPadre1.titulo,this.cardsPadre1.tipo,this.cardsPadre1.fecha,this.cardsPadre1.hora,this.cardsPadre1.precio,this.cardsPadre1.localizacion,this.cardsPadre1.maxperros,this.cardsPadre1.informacion,this.cardsPadre1.id_usuario, this.cardsPadre1.disponibles)
    console.log(this.actividadService.actividadinfo)
    this.router.navigateByUrl("/actividadCard")
  }

  ngOnInit(): void {
  }

}

