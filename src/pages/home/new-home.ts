import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: any;
  markers: any;

  establishments = [{
    name: 'Biratnagar',
    lat: 26.4525,
    lng: 87.2718
  }, {
    name: 'Biratnagar',
      lat: 26.7944,
      lng: 87.2718
  }]
  constructor(public navCtrl: NavController, public geolocation: Geolocation, private platform: Platform) {

  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    })
  }

  initPage(){
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    })
  }
  
  loadMap(lat, lng){
    let latLng = new google.maps.LatLng(lat, lng);

    let mapOption = {
      center: latLng,
      zoom: 14,
      mapTypeId:'roadmap',
      disableDefaultUI: true
    }

    let element = document.getElementById('map');

    this.map = new google.maps.Map(element, mapOption);

    let marker = new google.maps.Marker({
      position: latLng,
      title: 'Biratnagar, Janpath-15',
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    })
    
    let content = `
      <div id="myId" class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6> `+marker.title+`</h6>
            <h6> `+ marker.position +`</h6>
          </ion-row>
        </ion-item>
      </div>
    `
    this.addInfoWindow(marker, content);
    marker.setMap(this.map);

    // this.loadPoints();
  }
  
  // loadPoints(){
  //   this.markers = [];
  //    for (const key of Object.keys(this.establishments)){
  //      let latLang = new google.maps.latLang(this.establishments[key].lat, this.establishments[key].lng);
  //      let marker = new google.maps.Marker({
  //        position: latLang,
  //        title: this.establishments[key].name
  //      })
  //      let content = `
  //     <div id="myId" class="item item-thumbnail-left item-text-wrap">
  //       <ion-item>
  //         <ion-row>
  //           <h6> `+ this.establishments[key].name + `</h6>
  //         </ion-row>
  //       </ion-item>
  //     </div>
  //   `
  //      this.addInfoWindow(marker, content);
  //      marker.setMap(this.map);
  //    }
  // }
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content:content
    })

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    })

  }

}
