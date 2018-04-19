import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfissionaisPage } from '../profissionais/profissionais';
import { HospitaisPage } from '../hospitais/hospitais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openProfissionaisPage(){
    this.navCtrl.push(ProfissionaisPage);
  }

  openHospitaisPage(){
    this.navCtrl.push(HospitaisPage);
  }

}
