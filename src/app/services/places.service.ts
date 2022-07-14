import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public url : string = "http://localhost:3000/home";

  

  public userLocation?: [number, number];

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor(
    private http: HttpClient
  ) {

    this.getUserLocation();

   }

  public async getUserLocation(): Promise<[number, number]>{

    return new Promise( (resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ( { coords } ) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve( this.userLocation );
        },
        ( err ) => {

          // alert('No se pudo obtener la geolocalización');
          console.log(err)
          reject();
        }

      );

    });

  }

  getPipicanes():Observable<Object>{

    //dentro del get iría el endpoint para obtener lo todos los pipicanes

    return this.http.get(this.url);

  }

  getDistancia( start: [number, number], end: [number, number] ):Observable<Object>{

    return this.http.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${start.join(',')};${end.join(',')}?alternatives=false&continue_straight=true&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoiYW5kcmVzLTI5IiwiYSI6ImNsMjJ6enZiMDA0NzQzanFrN3Z4c3RxejQifQ.dlmE5vkLBhkHDfIokDpSPA`)

  }

}
