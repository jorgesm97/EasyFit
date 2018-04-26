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
  public usuario;
  public contraseña;
  public telefono;
  public email;
  public nombre;
  public apellidos;
  public fecha_nacimiento;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = navParams.get("usuario");
    this.contraseña = navParams.get("contraseña");
    this.telefono = navParams.get("telefono");
    this.email = navParams.get("email");
    console.log("second page " + this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuenta2Page');
  }

  // manda datos del input usuario a la siguente pagina
  irPagSiguiente() {
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let apellidos = (<HTMLInputElement>document.getElementById("apellidos")).value;
    let fecha_nacimiento = (<HTMLInputElement>document.getElementById("fecha_nacimiento")).value;
    console.log("sending 2 " + this.usuario);
    console.log("sending 2 " + this.nombre);
    this.navCtrl.push('PrincipalPage',{usuario: this.usuario, contraseña: this.contraseña,
      telefono: this.telefono, email: this.email, nombre: nombre,
      apellidos: apellidos, fecha_nacimiento: fecha_nacimiento});
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
