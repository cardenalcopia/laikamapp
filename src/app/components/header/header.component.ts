import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividades } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public muestra :Actividades[]=[];
  constructor(public actividadService:ActividadesService,public usuarioService:UsuarioService , public router:Router) { }
  public mostrar()
  { 
    this.router.navigateByUrl('/creadas');
  

  }
  ngOnInit(): void {
  }

}
