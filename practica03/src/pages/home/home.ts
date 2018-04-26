import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaClientesInicio:any;
  public tipo;
  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider) {

  }

  irPagCrearCuenta()
  {
	  this.navCtrl.push('CrearCuenta1Page');
  }

  irPagSiguienteEnt() {
	  this.navCtrl.push('HomeEntrenadorPage');
  }

  irPagSiguiente() {
    let usuariologin = (<HTMLInputElement>document.getElementById("usuariologin")).value;
    let contraseñalogin = (<HTMLInputElement>document.getElementById("contraseñalogin")).value;
    console.log(usuariologin);
    console.log(contraseñalogin);
    for (let cliente of this.listaClientesInicio) {
      console.log(cliente.usuario);
      console.log(cliente.contraseña);
      if (cliente.usuario == usuariologin) {
        if (cliente.contraseña == contraseñalogin) {
          console.log("login OK");
          this.tipo = cliente.tipo;
          console.log(this.tipo);
          if (this.tipo == 'entrenador') {
            this.navCtrl.push('HomeEntrenadorPage');
          }
          if (this.tipo == 'deportista') {
            this.navCtrl.push('HomeDeportistaPage');
          }	
        }
      }
      else {
        console.log("invalid");
      }
    }
  }

/*   irPagSiguienteDep() {
  
  } */

  ionViewDidEnter()
  {
	  this.dbFirebase.getClientes().subscribe(listaClientesInicio=>{this.listaClientesInicio=listaClientesInicio;});
  }
   
}
