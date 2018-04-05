import { Component } from '@angular/core';
import {Coche, EstadoCoche} from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  public EstadoCoche:any = this.EstadoCoche; // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.

  public coches:Array<Coche> = [ new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),
                            new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'coche01.jpg',EstadoCoche.BUENO),
                            new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),52000,'coche01.jpg',EstadoCoche.BUENO)];
  public venderCoche(i){
    this.coches.splice(i,1);
  }
  public rebajarCoche(i){
    this.coches[i].precio = this.coches[i].precio*0,9;
  }

  public getFiltrados(filter){
    //for each Coche.marca => contains filter add to array filtrados
    //return filtrados;
  }

}
