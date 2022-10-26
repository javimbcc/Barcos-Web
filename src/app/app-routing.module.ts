import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesBarcoComponent } from './detalles-barco/detalles-barco.component';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';

const routes: Routes = [
  { path: 'detalles-barco/:id', component: DetallesBarcoComponent },
  { path: 'barcos', component: ListaBarcosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
