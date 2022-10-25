import { Component, OnInit, Input } from '@angular/core';
import { Barcos } from '../interface/interfazBarco';

@Component({
  selector: 'app-detalles-barco',
  templateUrl: './detalles-barco.component.html',
  styleUrls: ['./detalles-barco.component.css']
})
export class DetallesBarcoComponent implements OnInit {
  @Input() barco?: Barcos;
  constructor() { }

  ngOnInit(): void {
  }

}
