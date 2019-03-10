import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage  : Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    this.storage.clear();
    this.storage.get('user').then((user) => { console.log("clear storage "+user); this.navCtrl.setRoot(LoginPage); });
  }

}
