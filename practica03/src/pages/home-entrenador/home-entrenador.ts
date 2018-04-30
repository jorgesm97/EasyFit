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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = navParams.data;
    console.log(this.cliente.nombre);
    let nombre = this.cliente.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeEntrenadorPage');
  }

  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  irEntrenamientos(){
    this.navCtrl.push('ListaDeportistasEntrenamientoPage');
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }
}
