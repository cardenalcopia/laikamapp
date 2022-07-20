import { Component, OnInit } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';
import { NombreCreador } from 'src/app/models/nombre-creador';
import {ActividadesService} from '../../services/actividades.service'

@Component({
  selector: 'app-cards-actividades',
  templateUrl: './cards-actividades.component.html',
  styleUrls: ['./cards-actividades.component.css']
})
export class CardsActividadesComponent implements OnInit {
public muestra:NombreCreador[]=[];
  // public cards: Actividades[]=[
  //   new Actividades(1, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Ruteo que te veo", "Escapada", new Date("2022, 07, 22"), "17:20", "15", "San fermín", 10, "Es una increíble actividad y escapada"),
  //   new Actividades(2, "http://www.xn--grupobriceo-beb.es//CMS/Ficheros/Imagenes/20170210-104846.med.jpg", "Entrenamiento", "Entrenamiento", new Date("2022, 07, 22"), "15:30", "5", "San fermín", 10, "Es una increíble actividad y entrenamiento"),
  //   new Actividades(3, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Evento perruno por el monte", "Eventos", new Date("2022, 07, 22"), "20:15", "8", "San fermín", 10, "Es una increíble actividad y evento")
  // ]
  constructor(public actividadservice:ActividadesService) { }
public mostrar(tipo:string)
{
   console.log(tipo)
  this.actividadservice.getAll(tipo).subscribe((data:NombreCreador[])=>{
    this.muestra=data
    this.actividadservice.actividadesDisponibles=this.muestra
    console.log(this.muestra)
    
})
}
  ngOnInit(): void {
    this.mostrar("Ruta")
  }

}
