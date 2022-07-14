import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipican } from 'src/app/models/pipican';
import { PipicanService } from 'src/app/services/pipican.service';

@Component({
  selector: 'app-card-pipican',
  templateUrl: './card-pipican.component.html',
  styleUrls: ['./card-pipican.component.css']
})
export class CardPipicanComponent implements OnInit {
  @Input() cardsPadre:Pipican;

  constructor(public pipicanService:PipicanService, public router:Router) { }

  ngOnInit(): void {
  }

  getInfo(pipican:Pipican){

    this.pipicanService.pipicanInfo = new Pipican(this.cardsPadre.id_pipican, this.cardsPadre.imagen, this.cardsPadre.titulo, this.cardsPadre.calle, this.cardsPadre.distancia);
    
    this.router.navigateByUrl("/pipicanCard");
  }
}
