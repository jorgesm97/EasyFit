import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Cliente } from '../../models/cliente.model';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})

export class PrincipalPage {

  public usuario;
  public password;
  public telefono;
  public email;
  public nombre;
  public apellidos;
  public fecha_nacimiento;
  public tipo;
  public genero;
  listaClientes:any;
  cliente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, public alertCtrl:AlertController) {
    this.usuario = navParams.get("usuario");
    this.password = navParams.get("password");
    this.telefono = navParams.get("telefono");
    this.email = navParams.get("email");
    this.nombre = navParams.get("nombre");
    this.apellidos = navParams.get("apellidos");
    this.fecha_nacimiento = navParams.get("fecha_nacimiento");
    this.genero = navParams.get("genero");
    console.log(this.usuario);
    console.log(this.nombre);
  }

  // Estas funciones van a agregar usuarios usando el input
  addClienteEnt()
  {
    this.tipo = "entrenador";
		let datoscliente:Cliente=new Cliente();

    // los datos vienen del input de usuario
    // hay que añadir genero
    datoscliente.nombre = this.nombre;
    datoscliente.usuario = this.usuario;
    datoscliente.password = this.password;
    datoscliente.apellidos = this.apellidos;
    datoscliente.email = this.email;
    datoscliente.telefono = this.telefono;
    datoscliente.fecha_nacimiento = this.fecha_nacimiento;
    datoscliente.genero = this.genero;
    datoscliente.tipo = this.tipo;

    this.cliente = datoscliente;
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
      console.log(datoscliente.nombre + " guardado en FireBase");
    });
    this.irPagSiguiente();
  }

  addClienteDep()
  {
    this.tipo = "deportista";
		let datoscliente:Cliente=new Cliente();

    // los datos vienen del input de usuario
    // hay que añadir genero
    datoscliente.nombre = this.nombre;
    datoscliente.usuario = this.usuario;
    datoscliente.password = this.password;
    datoscliente.apellidos = this.apellidos;
    datoscliente.email = this.email;
    datoscliente.telefono = this.telefono;
    datoscliente.fecha_nacimiento = this.fecha_nacimiento;
    datoscliente.genero = this.genero;
    datoscliente.tipo = this.tipo;

    // se puede ver los datos guardados en firebase console -> database por el internet
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
      //console.log(datoscliente.nombre + " guardado en FB");
    });
    this.dbFirebase.getClientes().subscribe(listaClientes=>{this.listaClientes=listaClientes;})
    this.irPagSiguiente();
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

  irPagSiguiente() {
    let alert = this.alertCtrl.create({
    title: 'Usuario registrado con éxito',
    subTitle: 'Por favor, introduzca sus datos para acceder a su cuenta',
    buttons: ['De acuerdo']
  });
  alert.present();
    this.irHome();
  /*  if (this.tipo == 'entrenador') {
      this.navCtrl.push('HomeEntrenadorPage', {cliente: datoscliente, lista: this.listaClientes});
      console.log("Entra entrenador")
    }
    if (this.tipo == 'deportista') {
      this.navCtrl.push('HomeDeportistaPage', {cliente: datoscliente, lista:this.listaClientes});
      console.log("Entra deportista")
    }
    else {
      //console.log('tipo del usuario no definida');
    }*/
  }



  delCliente(id)
  {
	  this.dbFirebase.delCliente(id);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PrincipalPage');
  }

  irHome() {
	  this.navCtrl.setRoot(HomePage);
  }

  // No esta en uso
  updateCliente(id)
  {
	  let datoscliente:Cliente=new Cliente();
	  datoscliente.id=id;
	  datoscliente.nombre="Maria";
	  datoscliente.apellidos="de las mercedes";

	  this.dbFirebase.guardaCliente(datoscliente);
  }

}
