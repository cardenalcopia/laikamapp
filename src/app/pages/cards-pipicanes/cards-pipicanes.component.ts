import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pipican } from 'src/app/models/pipican';
import { PipicanService } from 'src/app/services/pipican.service';

@Component({
  selector: 'app-cards-pipicanes',
  templateUrl: './cards-pipicanes.component.html',
  styleUrls: ['./cards-pipicanes.component.css']
})
export class CardsPipicanesComponent implements OnInit {

  public cards: Pipican[]=[
  //   new Pipican(1, "http://www.xn--grupobriceo-beb.es//CMS/Ficheros/Imagenes/20170210-104846.med.jpg", "Parque del tío Pío", "C/Camino de valderribas s/n", "150m"),
  //   new Pipican(2, "https://www.deperrus.com/media/k2/items/cache/fd8b0f77d767f1f6640afba6916ff67c_XL.jpg", "Parque", "C/del parque", "250m"),
  //   new Pipican(3, "https://estaticos-cdn.prensaiberica.es/clip/4ba759e9-621b-483d-a4fc-26781b20cd86_16-9-aspect-ratio_default_0.jpg", "Pipican", "C/del pipican", "300m"),
    ]

  constructor(public pipicanService:PipicanService, public router: Router) { }

  public getPipicanes(){
    this.pipicanService.getAllPipi().subscribe((data:Pipican[])=>{
      this.cards=data
      console.log(this.cards)
    return this.cards
  })
}



  ngOnInit(): void {
    this.getPipicanes()
  }

}
