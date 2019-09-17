import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepassPage } from '../changepass/changepass';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profiles : Array<any> = [];
  private baseURI : string  = this.global.mysite; 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http     : HttpClient,
              public global: GlobalProvider,
              public storage  : Storage) {
  }

  ionViewDidLoad() {
    this.load(); 
    console.log('ionViewDidLoad ProfilePage');
  }


  load() : void
  {
     this.storage.get('user').then((user) => {

     let    url : any = this.baseURI+'G_RetrieveProfile.php?id='+user;
            
     this.http.get(url).subscribe((data : any) =>
     {
        console.dir(data);
        this.profiles = data;
     },
     (error : any) =>
     {
        console.dir(error);
     });
     //--------------------------------------------------
   }); //close storage
  }

  editProfile(params : any){
    this.navCtrl.push(EditprofilePage, params);
  }

  changePass(params : any){
    this.navCtrl.push(ChangepassPage, params);
  }
  navtohome(){
    this.navCtrl.setRoot(HomePage);
  }

}
