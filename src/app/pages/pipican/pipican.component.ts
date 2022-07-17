import { Component, OnInit } from '@angular/core';
import { Pipican } from 'src/app/models/pipican';
import { Rating } from 'src/app/models/rating';
import { PipicanService } from 'src/app/services/pipican.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pipican',
  templateUrl: './pipican.component.html',
  styleUrls: ['./pipican.component.css']
})
export class PipicanComponent implements OnInit {
  public card: Pipican;

  constructor(public pipicanService:PipicanService, public usuarioService:UsuarioService) { 
    this.card = pipicanService.pipicanInfo
  }

  public getCardPipican(id:HTMLInputElement){
      this.pipicanService.getCardPipi(id.valueAsNumber).subscribe((data:Pipican)=>{
        this.card=data
        console.log(this.card)
      return this.card
    })
  }

  public rating(num:number){

    let rating = new Rating(null, this.pipicanService.pipicanInfo.id_pipican, num, this.usuarioService.usuario1.id_usuario)
    this.pipicanService.postRating(rating).subscribe((data:Rating)=>{
      console.log(data);
    })
    let avg:number = 0;
    this.pipicanService.getAvg(this.pipicanService.pipicanInfo.id_pipican).subscribe((data:number)=>{
      console.log(data);
      avg = data
      console.log(avg);
      let pipican = new Pipican(this.pipicanService.pipicanInfo.id_pipican, null, null, null, null, null, null, avg[0].marks)
      this.pipicanService.putAvg(pipican).subscribe((data:Pipican)=>{
      console.log(data);
    })
    })
  }

  ngOnInit(): void {
  }

}
