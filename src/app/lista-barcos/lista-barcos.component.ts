import { Component, OnInit } from '@angular/core';
import { BarcoService } from '../barco.service';
import { Barcos } from '../interface/interfazBarco';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css'],
})
export class ListaBarcosComponent implements OnInit {
  barcos: Barcos[] = [];
  constructor(
    private barcoService: BarcoService
  ) {}

  getBarcos(): void {
    this.barcoService.getBarcos().subscribe(barco => this.barcos = barco);
  }

  barcoSeleccionado?: Barcos;
  onSelect(barco: Barcos) {
    this.barcoSeleccionado = barco;
  }

  ngOnInit(): void {
    this.getBarcos();
  }
}
