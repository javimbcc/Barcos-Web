import { Injectable } from '@angular/core';
import { Barcos } from './interface/interfazBarco';
import { barcos } from './mock/barcos';


@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor() { }

  getBarcos(): Barcos[] {
    return barcos;
  }
}
