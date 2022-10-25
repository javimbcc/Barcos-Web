import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';
import { DetallesBarcoComponent } from './detalles-barco/detalles-barco.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaBarcosComponent,
    DetallesBarcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
