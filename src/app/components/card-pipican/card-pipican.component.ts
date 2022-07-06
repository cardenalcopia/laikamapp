import { Component, Input, OnInit } from '@angular/core';
import { Pipican } from 'src/app/models/pipican';

@Component({
  selector: 'app-card-pipican',
  templateUrl: './card-pipican.component.html',
  styleUrls: ['./card-pipican.component.css']
})
export class CardPipicanComponent implements OnInit {
  @Input() cardsPadre:Pipican;

  constructor() { }

  ngOnInit(): void {
  }

}
