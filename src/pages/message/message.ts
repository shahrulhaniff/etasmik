import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  title :any;
  lastMessage:any;
  timestamp:any;
  juz : any;
  surah :any;
  lead : any;

  toUser = {
    _id: '534b8e5aaa5e7afc1b23e69b',
    pic: 'assets/img/avatar/ian-avatar.png',
    username: 'Ammar',
  };

  user = {
    _id: '534b8fb2aa5e7afc1b23e69c',
    pic: 'assets/img/avatar/marty-avatar.png',
    username: 'Nasrul',
  };

  public messageForm: any;
  chatBox: any;


  doneLoading = false;

  messages = [
    {
      _id: 1,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'I,ve done my part.'
    },
    {
      _id: 2,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Class will be annouced later'
    },
    {
      _id: 3,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Seen'
    },
    {
      _id: 4,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'Which part will be continue?'
    },
    {
      _id: 5,
      date: new Date(),
      userId: this.user._id,
      username: this.user.username,
      pic: this.user.pic,
      text: 'I`ve done',
    },
    {
      _id: 6,
      date: new Date(),
      userId: this.toUser._id,
      username: this.toUser.username,
      pic: this.toUser.pic,
      text: 'Nice'
    }
  ];



  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  ionViewWillEnter(): void {
    if (this.navParams.get("chat")) {
      this.selectEntry(this.navParams.get("chat"));
      
    }
  }

  selectEntry(item: any): void {
    console.log(item);
    this.title = item.title;
    this.lastMessage = item.lastMessage;
    this.timestamp = item.timestamp;
    this.surah = item.surah;
    this.lead = item.lead;
    this.juz = item.juz;
  }

  send(message) {
    if (message && message !== '') {
      // this.messageService.sendMessage(chatId, message);

      const messageData =
        {
          toId: this.toUser._id,
          _id: 6,
          date: new Date(),
          userId: this.user._id,
          username: this.toUser.username,
          pic: this.toUser.pic,
          text: message
        };

      this.messages.push(messageData);
      this.scrollToBottom();

      setTimeout(() => {
        const replyData =
          {
            toId: this.toUser._id,
            _id: 6,
            date: new Date(),
            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Just a quick reply'
          };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }
}
