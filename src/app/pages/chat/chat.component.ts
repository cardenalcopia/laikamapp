import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats';
import { Conversacion } from 'src/app/models/conversacion';
import { ListadochatsService } from 'src/app/services/listadochats.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public miconv:Conversacion=new Conversacion(null,null,null,null,null)
  public miId:number
  public minombre:string
  
  public conversaciones:Conversacion[]=[
    // new Conversacion(1,"Hola que tal"),
    // new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    // new Conversacion(1,"Tienes alguna duda de la actividad??"),
    // new Conversacion(1,"Hola que tal"),
    // new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    // new Conversacion(1,"Tienes alguna duda de la actividad??"),
    // new Conversacion(1,"Hola que tal"),
    // new Conversacion(2,"Muy buenas, que ganas de hacer la actividad"),
    // new Conversacion(1,"Tienes alguna duda de la actividad??")
  ]

  constructor(public listadochatsservice :ListadochatsService,public usuarioservice:UsuarioService ) {
  this.conversaciones= this.listadochatsservice.conversacion
this.miId=this.usuarioservice.usuario1.id_usuario
this.minombre=this.usuarioservice.usuario1.nombre
  ;
   }
   postMensaje(mensaje:string)
   {
    
    this.miconv.id_usuario=this.usuarioservice.usuario1.id_usuario
    this.miconv.id_chat=this.listadochatsservice.miIdchat
    this.miconv.mensaje=mensaje
    this.listadochatsservice.addConversacion(this.miconv).subscribe((data:any)=>{
      console.log("conversacion actualizada con "+data)
      this.conversaciones.push(this.miconv)
    })
   }
 

  ngOnInit(): void {
  }

}
