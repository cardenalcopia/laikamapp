import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats';
import { Conversacion } from 'src/app/models/conversacion';
import { ActividadesService } from 'src/app/services/actividades.service';
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
  public nombrecreador:string
  
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

  constructor(public listadochatsservice :ListadochatsService,public usuarioservice:UsuarioService,public actividadservice:ActividadesService ) {
  this.conversaciones= this.listadochatsservice.conversacion
  console.log(this.listadochatsservice.conversacion);
  
this.miId=this.usuarioservice.usuario1.id_usuario
this.minombre=this.usuarioservice.usuario1.nombre
// this.nombrecreador=this.actividadservice.actividadesNombreCreador.nombre
  ;
   } 
   postMensaje(mensaje:string)
   {
    let nuevaConversacion = new Conversacion(null,null,mensaje,
                                            this.usuarioservice.usuario1.id_usuario,
                                            this.listadochatsservice.miIdchat)
    console.log(nuevaConversacion);
    
    this.conversaciones.push(nuevaConversacion)
    console.log(this.conversaciones);
    
    this.listadochatsservice.addConversacion(nuevaConversacion).subscribe((data:any)=>{
      console.log("conversacion actualizada con "+data)
      let form = <HTMLFormElement>document.querySelector('.mensaje');

      form.reset();
      
    })
   }
 

  ngOnInit(): void {window.scrollTo(0,10000)
  }

}
