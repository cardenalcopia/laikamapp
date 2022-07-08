import { Component, OnInit } from '@angular/core';
import { Conversacion } from 'src/app/models/conversacion';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public conversaciones:Conversacion[]=[
    new Conversacion(1,"Hola que tal"),
    new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    new Conversacion(1,"Tienes alguna duda de la actividad??"),
    new Conversacion(1,"Hola que tal"),
    new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    new Conversacion(1,"Tienes alguna duda de la actividad??"),
    new Conversacion(1,"Hola que tal"),
    new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    new Conversacion(1,"Tienes alguna duda de la actividad??")
  ]

  constructor() { }
  public getConversacion():Conversacion[]
{
return this.conversaciones;
}

  ngOnInit(): void {
  }

}
