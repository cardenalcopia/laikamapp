import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividades } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-creadas',
  templateUrl: './creadas.component.html',
  styleUrls: ['./creadas.component.css']
})
export class CreadasComponent implements OnInit {
  public actCreadas: Actividades[];
  public controlador: boolean = false;
  // public cards: Actividades[]=[
  //   new Actividades(1, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Ruteo que te veo", "Escapada", new Date("2022, 07, 22"), "18:30", "50", "San fermín", 10, "Es una increíble actividad y escapada",null),
  //   new Actividades(2, "http://www.xn--grupobriceo-beb.es//CMS/Ficheros/Imagenes/20170210-104846.med.jpg", "Entrenamiento", "Entrenamiento", new Date("2022, 07, 22"), "17:30", "20", "San fermín", 10, "Es una increíble actividad y entrenamiento",null),
  //   new Actividades(3, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Evento perruno por el monte", "Eventos", new Date("2022, 07, 22"), "18:00", "15", "San fermín", 10, "Es una increíble actividad y evento",null)]
  constructor(public actividadService:ActividadesService,
    public router1:Router,
    public usuarioService:UsuarioService) { 

     
    

  }
  public mostrar()
  { 
   
     
    this.actividadService.getAllCreadas(this.usuarioService.usuario1.id_usuario)
      .subscribe((data:Actividades[])=>{
    
      this.actividadService.actividadesCreadas = data;

      this.actCreadas = this.actividadService.actividadesCreadas;

      if( this.actCreadas.length > 0 ){

        this.controlador = true;

      }


  })
  }
 
  ngOnInit(): void {

   this.mostrar()
   
  }

}
