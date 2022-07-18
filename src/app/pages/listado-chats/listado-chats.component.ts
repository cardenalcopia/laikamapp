import { Component, OnInit } from '@angular/core';
import { Chats } from 'src/app/models/chats';
import { ListadochatsService } from 'src/app/services/listadochats.service';

@Component({
  selector: 'app-listado-chats',
  templateUrl: './listado-chats.component.html',
  styleUrls: ['./listado-chats.component.css']
})
export class ListadoChatsComponent implements OnInit {
  public chats :Chats[]=[];
 


  constructor(public chatsService:ListadochatsService) { }
// public getChats():Chats[]
// {
//   this.chats=this.chatsService.milistado
// return this.chats;
// }
// public postChats()
// {
//   this.chatsService.postChats(this.chatsService.milistado)
//   .subscribe((data:Chats)=>{
// console.log(data)


// })  
// }
  ngOnInit(): void {
  
  }

}
