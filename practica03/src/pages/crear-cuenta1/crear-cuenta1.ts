import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-crear-cuenta1',
  templateUrl: 'crear-cuenta1.html',
})
export class CrearCuenta1Page {
  usuario;
  password;
  telefono;
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuenta1Page');
  }*/

  // manda datos del input usuario a la siguente pagina
  irPagSiguiente() {
    let usuario = this.usuario;
    //console.log("sending " + usuario);
    let password = this.password;
    //console.log("sending" + password);
    let telefono = this.telefono;
    let email = this.email;
    //console.log("sending " + email);
	if(usuario==null || password==null || telefono==null || email==null) alert("Por favor, complete los campos antes de continuar");
	else{
    this.navCtrl.push('CrearCuenta2Page',{usuario: usuario, password: password,
  telefono: telefono, email: email});}
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
