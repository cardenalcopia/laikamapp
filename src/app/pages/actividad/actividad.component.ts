import { Component, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  public actividad: Actividades;

  constructor() { 
    this.actividad = new Actividades(null, 
      'http://www.xn--grupobriceo-beb.es//CMS/Ficheros/Imagenes/20170210-104846.med.jpg', 'Ruta por el Monte', 
      'Enseñanza', new Date("2022, 07, 22"), '18:30', '50', 'C/Camino de Valderribas s/n', 6, 
      'Vivamus gravida leo eget accumsan ornare. Mauris dolor sapien, auctor ut gravida eget, laoreet sed libero. Integer eleifend non mauris ac venenatis. Nam bibendum ante eget tortor dignissim tristique. Donec faucibus libero vitae ex pellentesque dictum. Suspendisse ultricies dolor tincidunt sem lacinia finibus. Vivamus non mi arcu.');
  }

  ngOnInit(): void {
  }

}
