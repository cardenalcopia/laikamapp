import { Component, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() valor: any;
  @Output() valor2: any;
  constructor() { }

  ngOnInit(): void {
  }

}
