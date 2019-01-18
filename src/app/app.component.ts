import { MapsService } from './maps.service';
import { Component } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = -17.380579;
  lng: number = -66.160124;

  onChoseLocation(event){
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }


  //lat: string = '';
  //lng: string = '';
  //title: string = '';
  
     //location: Object;
  //items: Observable<any[]>;
   constructor(private map: MapsService){//db: AngularFirestore ){
    //this.items = db.collection('items').valueChanges();
  }
  //  ngOnInit(){
  //   this.map.getLocation().subscribe(data => {
  //     console.log(data);
       //this.lat = data.latitude;
       //this.lng = data.longitude;
  //     this.title = data.country_name;
  //   })
  // }

}
