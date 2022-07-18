import { Component, OnInit } from '@angular/core';
import { Actividades } from '../../models/actividades';
import { Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-formulario-editar-actividad',
  templateUrl: './formulario-editar-actividad.component.html',
  styleUrls: ['./formulario-editar-actividad.component.css']
})
export class FormularioEditarActividadComponent implements OnInit {

  public actividades: Actividades[];

  public actividad: Actividades;

  public editar: boolean = false;

  public opciones: string[] = ['Ruta', 'Entrenamiento', 'Evento'];

  public selected: string = this.opciones[0];

  public micard:Actividades
  constructor(public router: Router, private toastr: ToastrService, public actividadService :ActividadesService, public userService :UsuarioService) {

    this.micard=actividadService.actividadmodificar
   }
  

  ngOnInit(): void {
  }

  crearSuccess(){
    this.toastr.success('Has creado una actividad', 'Enhorabuena!!!');
  }

  editarSuccess(){
    this.toastr.success('Actividad editada');
  }

  crear(miactiv:Actividades){
let actividadnuva:Actividades= new Actividades(miactiv.id_actividades,miactiv.imagen,miactiv.titulo,
                                               miactiv.tipo,miactiv.fecha,miactiv.hora,miactiv.precio,
                                               miactiv.localizacion,miactiv.maxperros,miactiv.informacion,miactiv.id_usuario)
 this.actividadService.putCreada(actividadnuva).subscribe((data:Actividades)=>{
        console.log(data)
   })
    console.log(this.actividad);

    
      this.editarSuccess();
    

    this.router.navigateByUrl('/creadas');

  }

}
