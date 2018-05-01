import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Cliente } from '../../models/cliente.model';

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
	listaClientes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

	  this.listaClientes= navParams.get("lista");

  }

  ionViewDidLoad() {

  }

  //Terminar esta función para que devuelva la lista con los clientes de tipo deportista
  public getDeportistas():Array<Cliente>{
    var filtrados:Array<Cliente>=[];
	  var indice:number=0;
	  for(var cliente of this.listaClientes)
	  {
		  if (cliente.tipo=="deportista")
      filtrados.push(cliente);
		  indice=indice+1;
      console.log(cliente.nombre+ "añadido");
	  }
	return filtrados;
}

  //Pasar el cliente que va a recibir el entrenamiento con la fecha
  /*irPagSiguiente(){
    this.navCtrl('añadirEntrenamiento', cliente);
  }*/

}
