import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitaisPage } from './hospitais';

@NgModule({
  declarations: [
    HospitaisPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitaisPage),
  ],
})
export class HospitaisPageModule {}
