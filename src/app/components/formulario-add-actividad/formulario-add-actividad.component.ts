import { Component, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-add-actividad',
  templateUrl: './formulario-add-actividad.component.html',
  styleUrls: ['./formulario-add-actividad.component.css']
})
export class FormularioAddActividadComponent implements OnInit {

  public actividades: Actividades[];

  public actividad: Actividades;

  constructor(public router: Router) {
    this.actividad = new Actividades(null, null,null, null, null, null, null, null);
   }

  ngOnInit(): void {
  }

  crear(){

    console.log(this.actividad);

    this.router.navigateByUrl('/creadas');

  }

}
