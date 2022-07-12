import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';

@Component({
  selector: 'app-card-creadas-actividad',
  templateUrl: './card-creadas-actividad.component.html',
  styleUrls: ['./card-creadas-actividad.component.css']
})
export class CardCreadasActividadComponent implements OnInit {
  @Input() cardsPadre:Actividades;
  @Output() eventoCard = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
