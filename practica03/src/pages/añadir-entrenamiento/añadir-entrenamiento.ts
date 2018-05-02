import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

/**
 * Generated class for the AñadirEntrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-añadir-entrenamiento',
  templateUrl: 'añadir-entrenamiento.html',
})
export class AñadirEntrenamientoPage {
  deportista:Cliente;
  fecha_entrenamiento;
  ejercicio;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public alertCtrl: AlertController) {
    this.deportista = navParams.get("cliente");
  }


  addEntrenamiento(){
    let fecha_entrenamiento = this.fecha_entrenamiento;
    let ejercicio = this.ejercicio;
	if(fecha_entrenamiento==null || ejercicio==null){
		let alert = this.alertCtrl.create({
		title: 'Completar los campos',
		subTitle: 'Por favor, complete los campos antes de continuar.',
		buttons: ['De acuerdo']
		});
	alert.present();}
	else{
		if(this.deportista.entrenamientos == null){
			this.deportista.entrenamientos = [];
		}

		this.deportista.entrenamientos.push([fecha_entrenamiento, ejercicio]);
		this.dbFirebase.guardaCliente(this.deportista).then(res=>{
		});
		this.irPagSiguiente();
	}
  }
  getlista():Array<[Date, string]>{
	return this.deportista.entrenamientos;
  }
  eliminar(id){
    this.deportista.entrenamientos.splice(id,1);
    this.dbFirebase.guardaCliente(this.deportista).then(res=>{
    })
  }
  irPagSiguiente(){
    this.navCtrl.pop();
  }
}
