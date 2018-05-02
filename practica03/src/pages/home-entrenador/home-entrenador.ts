import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the HomeEntrenadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-entrenador',
  templateUrl: 'home-entrenador.html',
})
export class HomeEntrenadorPage {
  cliente:any;
  listaClientes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.get("cliente");
    this.listaClientes = navParams.get("lista");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEntrenadorPage');
  }

  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  irEntrenamientos(){
    this.navCtrl.push('ListaDeportistasEntrenamientoPage', {cliente: this.cliente, lista:this.listaClientes});
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }
  irChat(){
    this.navCtrl.push('ListaDeportistasChatPage', {cliente: this.cliente, lista: this.listaClientes});
  }
  irAjustes(){
    this.navCtrl.push('AjustesPage', {cliente: this.cliente});
  }
}
