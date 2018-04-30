import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaDeportistasEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-deportistas-entrenamiento',
  templateUrl: 'lista-deportistas-entrenamiento.html',
})
export class ListaDeportistasEntrenamientoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeportistasEntrenamientoPage');
  }

  //Terminar esta función para que devuelva la lista con los clientes de tipo deportista
  /*public getDeportistas():Array<number>{
	  var filtrados:Array<number>=[];
	  var indice:number=0;
	  for(var coche of this.clientes)
	  {
		  if (cliente.tipo=="deportista")
      filtrados.push(indice);
		  indice=indice+1;
	  }
	return filtrados;
}*/

  //Pasar el cliente que va a recibir el entrenamiento con la fecha
  /*irPagSiguiente(){
    this.navCtrl('añadirEntrenamiento', cliente);
  }*/

}
