import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';

@Component({
  selector: 'app-card-apuntadas-actividad',
  templateUrl: './card-apuntadas-actividad.component.html',
  styleUrls: ['./card-apuntadas-actividad.component.css']
})
export class CardApuntadasActividadComponent implements OnInit {

  @Input() cardsPadre:Actividades;
  @Output() eventoCard = new EventEmitter<number>();

  constructor() { }
  borrar(id:number){
    
    this.eventoCard.emit(this.cardsPadre.id_actividades);
    console.log("this.cardsPadre.id_actividades");
    console.log(this.cardsPadre.id_actividades);
  }

  ngOnInit(): void {
  }

}
