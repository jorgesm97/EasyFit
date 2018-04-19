import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

  irPagSiguienteEnt() {
	  this.navCtrl.push('HomeEntrenadorPage');
  }

  irPagSiguienteDep() {
	  this.navCtrl.push('HomeDeportistaPage');
  }
}
