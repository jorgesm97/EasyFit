import { Component } from '@angular/core';
import {NavController, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarioLogin;
  passwordLogin;
  listaClientesInicio:any;
  public tipo;
  match: boolean;
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider,  public alertCtrl:AlertController) {

  }

  irPagCrearCuenta()
  {
	  this.navCtrl.push('CrearCuenta1Page');
  }

  irPagSiguiente() {
    this.match = false;
    let usuariologin = this.usuarioLogin;
    let passwordlogin = this.passwordLogin;
    for (let cliente of this.listaClientesInicio) {
      if (cliente.usuario == usuariologin) {
        if (cliente.password == passwordlogin) {
          this.tipo = cliente.tipo;
          if (this.tipo == 'entrenador') {
            this.navCtrl.push('HomeEntrenadorPage', {cliente: cliente, lista: this.listaClientesInicio});
            this.match=true;

          }
          if (this.tipo == 'deportista') {
            this.navCtrl.push('HomeDeportistaPage', {cliente: cliente, lista: this.listaClientesInicio});
            this.match =true;
          }
        }
      }
      }
      if(this.match==false){
      let alert = this.alertCtrl.create({
      title: 'Usuario no encontrado',
      subTitle: 'Por favor, introduzca de nuevo sus datos o regístrese si no dispone de una cuenta',
      buttons: ['De acuerdo']
    });
    alert.present();
  }
    }


  ionViewDidEnter()
  {
	  this.dbFirebase.getClientes().subscribe(listaClientesInicio=>{this.listaClientesInicio=listaClientesInicio;});
  }

}
