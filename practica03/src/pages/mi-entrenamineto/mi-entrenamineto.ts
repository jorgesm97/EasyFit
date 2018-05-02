import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

/**
 * Generated class for the MiEntrenaminetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-entrenamineto',
  templateUrl: 'mi-entrenamineto.html',
})
export class MiEntrenaminetoPage {
  client:Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
	  this.client = navParams.get("cliente");
    console.log(this.client.nombre);
  }

  public getEntrenamientos():Array<[Date, string]>{
	return this.client.entrenamientos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiEntrenaminetoPage');
  }
  public eliminar(id){
    this.client.entrenamientos.splice(id,1);
    this.dbFirebase.guardaCliente(this.client).then(res=>{
			//console.log(this.deportista.nombre + " guardado en FB");
		})
  }

}
