import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeDeportistaPage } from './home-deportista';

@NgModule({
  declarations: [
    HomeDeportistaPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeDeportistaPage),
  ],
})
export class HomeDeportistaPageModule {}
