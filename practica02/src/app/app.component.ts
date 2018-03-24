import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}

class Vehiculo {
  foto: string;
  marca: string;
  modelo: string;
  año: number;
  fecha: number;
  precio: number;
  puP: number;

  constructor(foto: string, marca: string, modelo: string, año: number,
          fecha: number, precio: number, puP: number) {
      this.foto = foto;
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.fecha = fecha;
      this.precio = precio;
      this.puP = puP;
  }
}
