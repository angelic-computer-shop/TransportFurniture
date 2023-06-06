import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit{
  title='LocationApp';

  ngOnInit() {
    if(!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(
        'lat: ${position.coords.latitude}, lon:${position.coords.longitude}');
    });
    this.watchPosition();
  }

  watchPosition(){
    let desLat=0;
    let desLon=0;

   let id = navigator.geolocation.watchPosition(
      (position) =>{
    console.log('lat: ${position.coords.latitude}, lon:${position.coords.longitude}'
    );
    if(position.coords.latitude === desLat)
    {
      navigator.geolocation.clearWatch(id);
    }
  },
  (err)=>
  {
    console.log(err);
  },

  {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
  })
  
  }
}

