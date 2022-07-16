import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actividades } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-card-apuntadas-actividad',
  templateUrl: './card-apuntadas-actividad.component.html',
  styleUrls: ['./card-apuntadas-actividad.component.css']
})
export class CardApuntadasActividadComponent implements OnInit {

  @Input() cardsPadre:Actividades;
  @Output() eventoCard = new EventEmitter<number>();

  constructor(public dialog: MatDialog, public actividadesService: ActividadesService) { 
    this.actividadesService.cardsModal = new Actividades (null, null, null, null, null, null, null, null, null, null, null, null)
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  actualizar(cardsPadre:Actividades){

    this.actividadesService.cardsModal = cardsPadre;

  }

  borrar(id:number){
    console.log(id);
    
    this.eventoCard.emit(id);
  }

  ngOnInit(): void {
  }

}
// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   })
//   export class DialogContentExampleDialog {}
