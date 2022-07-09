import { Component, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario-add-actividad',
  templateUrl: './formulario-add-actividad.component.html',
  styleUrls: ['./formulario-add-actividad.component.css']
})
export class FormularioAddActividadComponent implements OnInit {

  public actividades: Actividades[];

  public actividad: Actividades;

  public editar: boolean = false;

  public opciones: string[] = ['Ruta', 'Entrenamiento', 'Evento'];

  public selected: string = this.opciones[0];

  constructor(public router: Router, private toastr: ToastrService) {

    if(this.editar == false){

      this.actividad = new Actividades(null, null, null, this.selected, null, null, '0', null, null, null);
      console.log(this.actividad);

    }
    else{

      //Aquí iria la actividad a editar
      //Se crea una nueva actividad simplemente para el ejemplo
      this.actividad = new Actividades(null, null, 'Paseo de Perros', this.selected, new Date("2022, 07, 22"), '18:30', '10', 'C/Luna', 7, 'Los que quieran ir');

    }
   }

  ngOnInit(): void {
  }

  crearSuccess(){
    this.toastr.success('Has creado una actividad', 'Enhorabuena!!!');
  }

  editarSuccess(){
    this.toastr.success('Actividad editada');
  }

  crear(){

    console.log(this.actividad);

    if( this.editar == false){
      this.crearSuccess();
    }
    else{
      this.editarSuccess();
    }

    this.router.navigateByUrl('/creadas');

  }

}
