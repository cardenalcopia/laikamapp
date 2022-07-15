import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipican } from 'src/app/models/pipican';
import { PlacesService } from 'src/app/services';
import { PipicanService } from 'src/app/services/pipican.service';

@Component({
  selector: 'app-pipican',
  templateUrl: './pipican.component.html',
  styleUrls: ['./pipican.component.css']
})
export class PipicanComponent implements OnInit {
  public card: Pipican;
  public id_card: string;

  constructor(
    public pipicanService:PipicanService,
    public placesService:PlacesService
    ) { 
    this.card = pipicanService.pipicanInfo
  }

  public getCardPipican(id:HTMLInputElement){
      this.pipicanService.getCardPipi(id.valueAsNumber).subscribe((data:Pipican)=>{
        this.card=data
        console.log(this.card)
      return this.card
    })
  }

  ngOnInit(): void {
  
  }

}
