import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeportistasChatPage } from './lista-deportistas-chat';

@NgModule({
  declarations: [
    ListaDeportistasChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeportistasChatPage),
  ],
})
export class ListaDeportistasChatPageModule {}
