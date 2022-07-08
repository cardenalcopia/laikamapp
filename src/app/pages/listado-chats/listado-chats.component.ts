import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats';

@Component({
  selector: 'app-listado-chats',
  templateUrl: './listado-chats.component.html',
  styleUrls: ['./listado-chats.component.css']
})
export class ListadoChatsComponent implements OnInit {
  public chats :Chats[]=[
    new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
    new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
    new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
  ];
 


  constructor() { }
public getChats():Chats[]
{
return this.chats;
}
  ngOnInit(): void {
  }

}
