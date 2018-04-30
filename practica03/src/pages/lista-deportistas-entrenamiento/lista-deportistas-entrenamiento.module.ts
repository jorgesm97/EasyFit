import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeportistasEntrenamientoPage } from './lista-deportistas-entrenamiento';

@NgModule({
  declarations: [
    ListaDeportistasEntrenamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeportistasEntrenamientoPage),
  ],
})
export class ListaDeportistasEntrenamientoPageModule {}
