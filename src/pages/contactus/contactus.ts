import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  http: HttpClient;
  mailgunUrl: string;
  mailgunApiKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, http: HttpClient) {
    this.http = http;
    this.mailgunUrl = "sandboxaa84c16715934fd4aa64e7cc51513ba0.mailgun.org";
    this.mailgunApiKey = window.btoa("api:key-007148f40ae43a896b6f81f42a757c88");
  }



  send(recipient: string, subject: string, message: string) {
    
    this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", "from=admin@test101.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
      {
        headers: { 'Authorization': 'Basic ' + this.mailgunApiKey, "Content-Type": "application/x-www-form-urlencoded" },
      }).subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
