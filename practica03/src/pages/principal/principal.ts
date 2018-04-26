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

  public usuario;
  public contraseña;
  public telefono;
  public email;
  public nombre;
  public apellidos;
  public fecha_nacimiento;
  public tipo;
  listaClientes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
    this.usuario = navParams.get("usuario");
    this.contraseña = navParams.get("contraseña");
    this.telefono = navParams.get("telefono");
    this.email = navParams.get("email");
    this.nombre = navParams.get("nombre");
    this.apellidos = navParams.get("apellidos");
    this.fecha_nacimiento = navParams.get("fecha_nacimiento");
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
    datoscliente.contraseña = this.contraseña;
    datoscliente.apellidos = this.apellidos;
    datoscliente.email = this.email;
    datoscliente.telefono = this.telefono;
    datoscliente.fecha_nacimiento = this.fecha_nacimiento;
    datoscliente.tipo = this.tipo;
	  
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
      console.log(datoscliente.nombre + " guardado en FB");
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
    datoscliente.contraseña = this.contraseña;
    datoscliente.apellidos = this.apellidos;
    datoscliente.email = this.email;
    datoscliente.telefono = this.telefono;
    datoscliente.fecha_nacimiento = this.fecha_nacimiento;
    datoscliente.tipo = this.tipo;
    
    // se puede ver los datos guardados en firebase console -> database por el internet
		this.dbFirebase.guardaCliente(datoscliente).then(res=>{
      console.log(datoscliente.nombre + " guardado en FB");
    });
    this.irPagSiguiente();	
  }

  irPagAnterior() {
	  this.navCtrl.pop();
  }

  irPagSiguiente() {
    if (this.tipo == 'entrenador') {
      this.navCtrl.push('HomeEntrenadorPage');
    }
    if (this.tipo == 'deportista') {
      this.navCtrl.push('HomeDeportistaPage');
    }
    else {
      console.log('tipo del usuario no definida');
    }
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
