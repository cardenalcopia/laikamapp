import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-card-creadas-actividad',
  templateUrl: './card-creadas-actividad.component.html',
  styleUrls: ['./card-creadas-actividad.component.css']
})
export class CardCreadasActividadComponent implements OnInit {
  // public muestra:Actividades[]=[];
  @Input() cardsPadre2:Actividades
  @Output() eventoCard = new EventEmitter<number>();

  
  
  constructor(
    public actividadService:ActividadesService,
    public router1:Router,
    public usuarioService:UsuarioService
  ) 
  {
    this.actividadService.actividadmodificar= new Actividades(null,null,null,null,null,null,null,null,null,null,null) 
    
  }
  
 
  getCard(actividad:Actividades)
  {

    this.actividadService.actividadmodificar= new Actividades(this.cardsPadre2.id_actividades,this.cardsPadre2.imagen,this.cardsPadre2.titulo,this.cardsPadre2.tipo,this.cardsPadre2.fecha,this.cardsPadre2.hora,this.cardsPadre2.precio,this.cardsPadre2.localizacion,this.cardsPadre2.maxperros,this.cardsPadre2.informacion,this.cardsPadre2.id_usuario)
   
    this.router1.navigateByUrl("/modificar")
  }

  ngOnInit(): void { 
   
  }

}
