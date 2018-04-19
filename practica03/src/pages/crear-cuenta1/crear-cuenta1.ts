import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-crear-cuenta1',
  templateUrl: 'crear-cuenta1.html',
})
export class CrearCuenta1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuenta1Page');
  }

  irPagSiguiente() {
	  this.navCtrl.push('CrearCuenta2Page');
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
