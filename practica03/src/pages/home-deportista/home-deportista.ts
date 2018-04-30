import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  cliente:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let cliente = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDeportistaPage');
  }

  irHome() {
    this.navCtrl.setRoot(HomePage);
  }
  irEntrenamiento(){
    this.navCtrl.push('miEntrenamiento', this.cliente);
  }
  irPagAnterior() {
	  this.navCtrl.pop();
  }
}
