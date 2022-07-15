import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Actividades } from '../../models/actividades';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  public actividad: Actividades;

  constructor(public actividadService:ActividadesService, public usuarioService :UsuarioService) { 
  
  }

  ngOnInit(): void {
  }

}
