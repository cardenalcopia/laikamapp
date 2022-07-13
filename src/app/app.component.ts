import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laikamapp';

  constructor(public usuarioService:UsuarioService){
    this.usuarioService.logueado 
  }
  
}
