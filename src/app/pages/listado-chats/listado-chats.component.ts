import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chats } from 'src/app/models/chats';
import { Conversacion } from 'src/app/models/conversacion';
import { ListadochatsService } from 'src/app/services/listadochats.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-chats',
  templateUrl: './listado-chats.component.html',
  styleUrls: ['./listado-chats.component.css']
})
export class ListadoChatsComponent implements OnInit {
  public chats :Chats[]=[
    // new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    // new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    // new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
    // new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    // new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    // new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
    // new Chats("Paseo por el monte","../../../assets/img/usuario.png"),
    // new Chats("Entrenamiento de paseo","../../../assets/img/usuario.png"),
    // new Chats("Quedada de dalmatas","../../../assets/img/usuario.png"),
  ];
 


  constructor(public listadochatsservice:ListadochatsService,public usuarioservice:UsuarioService,public router:Router) { }
public getChats(id_usuario:number):Chats[]
{
  this.listadochatsservice.getChats(this.usuarioservice.usuario1.id_usuario).subscribe((data:Chats[])=>{
    this.chats=data;
    this.listadochatsservice.michat=data;
    
    console.log(this.chats)
  })
return this.chats;
}
public getonechat(id_chat:number,titulo:string)
{
  this.listadochatsservice.getOnechat(id_chat).subscribe((data:Conversacion[])=>{
    console.log(data);
    this.listadochatsservice.conversacion=data;
    this.listadochatsservice.mititulo=titulo;
    this.listadochatsservice.miIdchat=id_chat
    this.router.navigateByUrl("/chats")
    
  })
}
  ngOnInit(): void {this.getChats(this.usuarioservice.usuario1.id_usuario)
   
  }

}
