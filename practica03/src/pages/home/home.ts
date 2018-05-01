import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';
import { NgModel } from '@angular/forms';

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
  //  console.log("A BUSCAR! "+ usuariologin);
  //  console.log("password "+passwordlogin);
    for (let cliente of this.listaClientesInicio) {
  //    console.log("Cliente:"+cliente.usuario);
  //    console.log(cliente.password);
      if (cliente.usuario == usuariologin) {
        if (cliente.password == passwordlogin) {
    //      console.log("login OK");
          this.tipo = cliente.tipo;
      //    console.log(this.tipo);
          if (this.tipo == 'entrenador') {
            this.navCtrl.push('HomeEntrenadorPage', cliente, this.listaClientesInicio);
            this.match=true;

          }
          if (this.tipo == 'deportista') {
            this.navCtrl.push('HomeDeportistaPage', cliente);
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
