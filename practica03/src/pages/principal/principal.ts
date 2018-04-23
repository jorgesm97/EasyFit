import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})

export class PrincipalPage {

  listaClientes:any;

  constructor(public navCtrl: NavController, public dbFirebase:FirebaseDbProvider) {

  }

  // Esta página va a agregar usuarios usando el input
  
  addCliente()
  {
		let datoscliente:Cliente=new Cliente();
    
    // los datos vienen del input de usuario
		datoscliente.nombre="Pepe";
		datoscliente.apellidos="San Juan";
	  
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
      alert(datoscliente.id + " guardado en FB");
		});
	  
  }
  
  updateCliente(id)
  {
	  let datoscliente:Cliente=new Cliente();
	  datoscliente.id=id;
	  datoscliente.nombre="Maria";
	  datoscliente.apellidos="de las mercedes";
	  
	  this.dbFirebase.guardaCliente(datoscliente);
  }
  
  ionViewDidEnter()
  {
	  this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;});
  }
   
  delCliente(id)
  {
	  this.dbFirebase.delCliente(id);
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
