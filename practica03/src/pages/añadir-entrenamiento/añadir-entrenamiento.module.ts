import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AñadirEntrenamientoPage } from './añadir-entrenamiento';

@NgModule({
  declarations: [
    AñadirEntrenamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(AñadirEntrenamientoPage),
  ],
})
export class AñadirEntrenamientoPageModule {}
