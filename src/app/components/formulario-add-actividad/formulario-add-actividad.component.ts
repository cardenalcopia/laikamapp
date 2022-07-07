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

  public editar: boolean = true;

  constructor(public router: Router, private toastr: ToastrService) {
    this.actividad = new Actividades(null, null,null, null, null, null, null, null);
   }

  ngOnInit(): void {
  }

  crearSuccess(){
    this.toastr.success('Has creado una actividad', 'En huella buena!!!');
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
