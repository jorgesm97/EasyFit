import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the HomeDeportistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-deportista',
  templateUrl: 'home-deportista.html',
})
export class HomeDeportistaPage {
  cliente:any;
  listaClientes:any;
  nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get("cliente");
    console.log(this.cliente.nombre);
    this.listaClientes = navParams.get("lista");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDeportistaPage');
  }

  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  irEntrenamiento(){
    this.navCtrl.push('MiEntrenaminetoPage', this.cliente);
  }
  irPagAnterior() {
	  this.navCtrl.pop();
  }
  irChat(){
  this.navCtrl.push('ListaEntrenadoresChatPage', {cliente: this.cliente, lista: this.listaClientes});
  }
}
