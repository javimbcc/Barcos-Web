import { Component, OnInit, Input } from '@angular/core';
import { Barcos } from '../interface/interfazBarco';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BarcoService } from '../barco.service';

@Component({
  selector: 'app-detalles-barco',
  templateUrl: './detalles-barco.component.html',
  styleUrls: ['./detalles-barco.component.css'],
})
export class DetallesBarcoComponent implements OnInit {
  @Input() barco?: Barcos;
  constructor(
    private route: ActivatedRoute,
    private barcoService: BarcoService,
    private location: Location
  ) {}

  getBarco(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.barcoService.getBarco(id).subscribe((barco) => (this.barco = barco));
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getBarco();
  }
}
