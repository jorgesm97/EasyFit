import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
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
    this.listaClientes = navParams.get("lista");

  }


  public getDeportistas():Array<Cliente>{
    var deportistas:Array<Cliente>=[];
	  for(var cliente of this.listaClientes)
	  {
		  if (cliente.tipo=="deportista")
      deportistas.push(cliente);
	  }
	return deportistas;
}

  public add(cliente: Cliente){
    	  this.navCtrl.push('AñadirEntrenamientoPage', {cliente: cliente});
  }
}
