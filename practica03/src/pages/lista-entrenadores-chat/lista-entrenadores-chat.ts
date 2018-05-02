import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';
/**
 * Generated class for the ListaEntrenadoresChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-entrenadores-chat',
  templateUrl: 'lista-entrenadores-chat.html',
})
export class ListaEntrenadoresChatPage {
  listaClientes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.listaClientes = navParams.get("lista");
  }



  public getEntrenadores():Array<Cliente>{
    var entrenadores:Array<Cliente>=[];
	  for(var cliente of this.listaClientes)
	  {
		  if (cliente.tipo=="entrenador")
      entrenadores.push(cliente);
	  }
	return entrenadores;
}

  public add(cliente: Cliente){
    	 // this.navCtrl.push('AñadirEntrenamientoPage', {cliente: cliente});
  }
}
