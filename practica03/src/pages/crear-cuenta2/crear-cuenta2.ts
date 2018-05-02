import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-crear-cuenta2',
  templateUrl: 'crear-cuenta2.html',
})
export class CrearCuenta2Page {
  public usuario;
  public password;
  public telefono;
  public email;
   nombre;
   apellidos;
   fecha_nacimiento;
   gender;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.usuario = navParams.get("usuario");
    this.password = navParams.get("password");
    this.telefono = navParams.get("telefono");
    this.email = navParams.get("email");
    //console.log("second page " + this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuenta2Page');
  }

  // manda datos del input usuario a la siguente pagina
  irPagSiguiente() {
    let nombre = this.nombre;
    let apellidos = this.apellidos;
    let fecha_nacimiento = this.fecha_nacimiento;
    let gender = this.gender;
    //let entrenamientos:any;
    //console.log("sending 2 " + this.usuario);
	if(nombre==null || apellidos==null || fecha_nacimiento==null || gender==null){
  let alert = this.alertCtrl.create({
  title: 'Completar los campos',
  subTitle: 'Por favor, complete los campos antes de continuar.',
  buttons: ['De acuerdo']
});
alert.present();}
	else{
		this.navCtrl.push('PrincipalPage',{usuario: this.usuario, password: this.password,
		  telefono: this.telefono, email: this.email, nombre: nombre,
		  apellidos: apellidos, fecha_nacimiento: fecha_nacimiento, genero: gender});
	}
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

}
