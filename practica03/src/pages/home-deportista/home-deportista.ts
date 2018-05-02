import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Cliente } from '../../models/cliente.model';
/**
 * Generated class for the HomeDeportistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-deportista',
  templateUrl: 'home-deportista.html',
})
export class HomeDeportistaPage {
  public cliente:Cliente;
  listaClientes:any;
  nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.cliente = navParams.get("cliente");
    console.log(this.cliente.nombre);
    this.listaClientes = navParams.get("lista");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDeportistaPage');
  }

  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  irEntrenamiento(){
	  if(this.cliente.entrenamientos==null){
		  let alert = this.alertCtrl.create({
				title: 'No hay ejercicios disponibles',
				subTitle: 'Tendrá que esperar a que su entrenador, le suba alguno.',
				buttons: ['De acuerdo']
				});
				alert.present();
	  }
	  else{
	  this.navCtrl.push('MiEntrenaminetoPage', this.cliente);}
  }
  irPagAnterior() {
	  this.navCtrl.pop();
  }
  irChat(){
  this.navCtrl.push('ListaEntrenadoresChatPage', {cliente: this.cliente, lista: this.listaClientes});
  }
}
