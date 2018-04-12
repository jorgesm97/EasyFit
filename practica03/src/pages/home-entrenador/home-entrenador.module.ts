import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeEntrenadorPage } from './home-entrenador';

@NgModule({
  declarations: [
    HomeEntrenadorPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeEntrenadorPage),
  ],
})
export class HomeEntrenadorPageModule {}
