import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-largo',
  templateUrl: './button-largo.component.html',
  styleUrls: ['./button-largo.component.css']
})
export class ButtonLargoComponent implements OnInit {

  @Input() valor: any;
  constructor() { }

  ngOnInit(): void {
  }

}
