import { Injectable } from '@angular/core';
import { Barcos } from './interface/interfazBarco';
import { barcos } from './mock/barcos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor() { }

  getBarcos(): Barcos[] {
    return barcos;
  }
}
