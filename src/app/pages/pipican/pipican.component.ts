import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipican } from 'src/app/models/pipican';
import { PlacesService } from 'src/app/services';
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
  public id_card: string;
  public votar:boolean = true;
  

  constructor(
    public pipicanService:PipicanService,
    public placesService:PlacesService,
    public usuarioService:UsuarioService
    ) { 
    this.card = pipicanService.pipicanInfo
    console.log(this.usuarioService.getVotaciones(this.usuarioService.usuario1.id_usuario));
    
    this.usuarioService.getVotaciones(this.usuarioService.usuario1.id_usuario)
    .subscribe((data:Rating[])=>{
      console.log(data);
      this.usuarioService.usuarioVotacion = data
      console.log(this.usuarioService.usuarioVotacion);

      if(this.usuarioService.usuarioVotacion.length > 0){
        for(let i = 0; i < this.usuarioService.usuarioVotacion.length; i++){
          if(this.usuarioService.usuarioVotacion[i].id_pipican == this.card.id_pipican){
            this.votar = false
          }
        }
      }
      
    })

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

        let pipican = new Pipican(this.pipicanService.pipicanInfo.id_pipican, null, null, null, null, null, null, avg[0].marks, null)
        this.pipicanService.putAvg(pipican).subscribe((data:Pipican)=>{
        console.log(data);
      })
    })
  }

  ngOnInit(): void {
  
  }

}
