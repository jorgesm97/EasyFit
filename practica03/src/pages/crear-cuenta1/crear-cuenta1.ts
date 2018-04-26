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

  // manda datos del input usuario a la siguente pagina
  irPagSiguiente() {
    let usuario = (<HTMLInputElement>document.getElementById("usuario")).value;
    let contraseña = (<HTMLInputElement>document.getElementById("contraseña")).value;
    let telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    console.log("sending " + usuario);
    console.log("sending " + email);
    this.navCtrl.push('CrearCuenta2Page',{usuario: usuario, contraseña: contraseña,
      telefono: telefono, email: email});
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
