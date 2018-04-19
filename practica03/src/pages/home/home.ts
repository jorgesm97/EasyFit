import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irPagCrearCuenta()
  {
	  this.navCtrl.push('CrearCuenta1Page');
  }

  irPagSiguienteEnt() {
	  this.navCtrl.push('HomeEntrenadorPage');
  }

  irPagSiguienteDep() {
	  this.navCtrl.push('HomeDeportistaPage');
  }
}
