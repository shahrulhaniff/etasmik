import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { PopoverPage } from '../popover/popover';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  today = Date.now();


  chats = [{
    imageUrl: 'assets/imgs/1.png',
    title: 'Tadarus I',
    lastMessage: 'New Checkpoint added!',
    timestamp: new Date(),
    juz : "2",
    surah : "Al-Baqarah (142) - Al-Baqarah(252)",
    lead : "Azman"
  },
  {
    imageUrl: 'assets/imgs/2.png',
    title: 'Tadarus II',
    lastMessage: 'latest activity by Idham',
    timestamp: new Date(),
    juz : "11",
    surah : "Al-Tauba (93) - Hud(5)",
    lead : "Lukman"
  },
  {
    imageUrl: 'assets/imgs/1.png',
    title: 'Tadarus III',
    lastMessage: 'Latest activity by Afiq',
    timestamp: new Date(),
    juz : "12",
    surah : "Hud (6) - Yusuf(52)",
    lead : "Nor Atiqah"
  },
  {
    imageUrl: 'assets/imgs/1.png',
    title: 'Tadarus IV',
    lastMessage: 'New members recruited!',
    timestamp: new Date(),
    juz : "16",
    surah : "Al-Kahfi (75) - Ta-Ha(153)",
    lead : "Syahid"
  },
  {
    imageUrl: 'assets/imgs/2.png',
    title: 'Tadarus V',
    lastMessage: 'All checkpoint finished!',
    timestamp: new Date(),
    juz : "30",
    surah : "Al-Nabaa (1) - Al-Nas(6)",
    lead : "Tenku"
  }
];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  viewMessages(param :any) {
    this.navCtrl.push(MessagePage, param);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, { });
    popover.present({
      ev: myEvent
    });
  }

  add(){
    this.navCtrl.push(CreatePage)
  }


}
