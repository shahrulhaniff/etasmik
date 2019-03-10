import { Component, ViewChild , ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalProvider } from "../../providers/global/global";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  public form     : FormGroup;
  createSuccess = false;
  private baseURI : string  = this.global.mysite;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public global: GlobalProvider,
              public fb         : FormBuilder,
              private alertCtrl : AlertController,
              public http       : HttpClient,
              public elementRef: ElementRef,
              public storage  : Storage ) {
                /* Buat validation */
                this.form = fb.group({
                  "nama_kumpulan"    : ["", Validators.required],
                  "surah_terakhir"   : ["", Validators.required]
               });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

    
  register() : void
   {
      console.log('Masuk fungsi register'); 
      let nama_kumpulan     : string    = this.form.controls["nama_kumpulan"].value,
      surah_terakhir     : string    = this.form.controls["surah_terakhir"].value;
      //if (pwd!=pwd2) { this.showPopup("Nope", "Check your password."); }else { this.createGroup(nama_kumpulan, surah_terakhir);  } 
      this.createGroup(nama_kumpulan, surah_terakhir);
      console.log('nama_kumpulan-->', nama_kumpulan , 'surah_terakhir-->', surah_terakhir); //undefine bosku
   }
   
   createGroup(nama_kumpulan : string, surah_terakhir : string) : void
   {
    this.storage.get('user').then((user) => { 
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= {"ic_pengguna" : user, "nama_kumpulan" : nama_kumpulan, "surah_terakhir" : surah_terakhir },
          url       : any   = this.baseURI + "createGroup.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((record : any) =>
      {
         // If the request was successful notify the user
        this.createSuccess = true;
        this.showPopup("Success", "Group created.");
      },
      error => {
        this.showPopup("Cant Register", error);
      }); 
    }); //close storage
   }

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';

  }

  
   //Untuk Popup
   showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) { 
              this.navCtrl.setRoot(HomePage);
              //this.navCtrl.popToRoot();
              //alert.dismiss(); 
              return false; 
            }
          }
        }
      ]
    });
    alert.present();
  }

}
