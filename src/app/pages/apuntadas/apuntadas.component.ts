import { Component, OnInit } from '@angular/core';
import { Actividades } from 'src/app/models/actividades';

@Component({
  selector: 'app-apuntadas',
  templateUrl: './apuntadas.component.html',
  styleUrls: ['./apuntadas.component.css']
})
export class ApuntadasComponent implements OnInit {

  public cards: Actividades[]=[
    new Actividades(1, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Ruteo que te veo", "Escapada", new Date("2022, 07, 22"), "18:30", "50", "San fermín", 10, "Es una increíble actividad y escapada",null),
    new Actividades(2, "http://www.xn--grupobriceo-beb.es//CMS/Ficheros/Imagenes/20170210-104846.med.jpg", "Entrenamiento", "Entrenamiento", new Date("2022, 07, 22"), "17:30", "20", "San fermín", 10, "Es una increíble actividad y entrenamiento",null),
    new Actividades(3, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Evento perruno por el monte", "Eventos", new Date("2022, 07, 22"), "18:00", "15", "San fermín", 10, "Es una increíble actividad y evento",null)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public borrar(id:number){

    console.log(id);
    console.log("this.cards");
    console.log(this.cards);
    let filtro = this.cards.filter(filtrar => filtrar.id_actividades == id)
    
    console.log("filtro");
    console.log(filtro);
    
    let borrar = id
    borrar = this.cards.indexOf(filtro[0])
    this.cards.splice(borrar,1);
}
}
