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
  deportista:any;
  fecha_entrenamiento;
  ejercicio;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public alertCtrl: AlertController) {
    this.deportista = navParams.get("cliente");
    console.log(this.deportista.nombre);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirEntrenamientoPage');
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
    
		this.deportista.entrenamientos.push([fecha_entrenamiento, ejercicio]);

		this.dbFirebase.guardaCliente(this.deportista).then(res=>{
			console.log(this.deportista.nombre + " guardado en FB");
		});
		this.irPagSiguiente();
	}
  }

  irPagSiguiente(){
    this.navCtrl.pop();
  }
}
