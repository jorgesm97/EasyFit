import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Practica 01';
  
  private comidas:Array<[string, number]>=[['Ternera con bambu y setas', 8], ['Tortilla de patatas', 5],
  ['Gazpacho', 8], ['Salmorejo', 8]];

  public cod_comida:[string, number]=['Ternera con bambu y setas', 8];

  public total = 0;
  
  public lista=[];
  
  public addComida()
  {
    // modificar cadenar para formar tupla [string, number]
    let str = this.cod_comida.toString().split(",");
    let precio = parseFloat(str[1]);
    let nombre = str[0];
    this.lista.push([nombre, precio]);
    this.total += precio;
    console.log([nombre, precio]);
    console.log(this.total);
    document.getElementById('idTotal').innerHTML = this.total.toString();
  }
  
  public delComida(i)
  {
    this.total -= this.lista[i][1];
    this.lista.splice(i,1);
    document.getElementById('idTotal').innerHTML = this.total.toString();
  }
}
