import { Injectable } from '@angular/core';
import { Barcos } from './interface/interfazBarco';
import { barcos} from './mock/barcos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  constructor() { }

  getBarco(id: number): Observable<Barcos> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const barco = barcos.find(h => h.id === id)!;
    return of(barco);
  }

  getBarcos(): Observable<Barcos[]> {
    const barco = of(barcos);
    return barco;
  }
}
