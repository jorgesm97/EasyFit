import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEntrenadoresChatPage } from './lista-entrenadores-chat';

@NgModule({
  declarations: [
    ListaEntrenadoresChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEntrenadoresChatPage),
  ],
})
export class ListaEntrenadoresChatPageModule {}
