import { Component, Input, OnInit } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';

@Component({
  selector: 'app-card-actividades',
  templateUrl: './card-actividades.component.html',
  styleUrls: ['./card-actividades.component.css']
})
export class CardActividadesComponent implements OnInit {
  @Input() cardsPadre:Actividades;

  constructor() { }

  ngOnInit(): void {
  }

}
