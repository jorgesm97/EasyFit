import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Cliente } from '../../models/cliente.model';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { HomePage } from '../home/home';
/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
  cliente:Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public dbFirebase: FirebaseDbProvider) {
    this.cliente= navParams.get("cliente");
  }
  salir(){
    this.navCtrl.setRoot(HomePage);
  }
  
irAnterior(){
  this.navCtrl.pop();
}
eliminarCuenta() {
  let alert = this.alertCtrl.create({
    title: 'Confirmar',
    message: '¿Está seguro de que quiere eliminar su cuenta?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.eliminar();
        }
      }
    ]
  });
  alert.present();
}
eliminar(){
    this.dbFirebase.delCliente(this.cliente.id);
    this.navCtrl.setRoot(HomePage);
}

}
