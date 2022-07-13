import { Component, OnInit } from '@angular/core';
import { Pipican } from 'src/app/models/pipican';
import { PipicanService } from 'src/app/services/pipican.service';

@Component({
  selector: 'app-pipican',
  templateUrl: './pipican.component.html',
  styleUrls: ['./pipican.component.css']
})
export class PipicanComponent implements OnInit {
  public card: Pipican;

  constructor(public pipicanService:PipicanService) { 
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
