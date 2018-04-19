import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the CrearCuenta2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cuenta2',
  templateUrl: 'crear-cuenta2.html',
})
export class CrearCuenta2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuenta2Page');
  }

  irPagSiguiente() {
	  this.navCtrl.push('PrincipalPage');
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
