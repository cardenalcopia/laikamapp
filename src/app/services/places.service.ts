import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public url : string = "http://localhost:3000";

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

  getPipicanes():Observable<Object>{//

    //dentro del get iría el endpoint para obtener lo todos los pipicanes

    return this.http.get(this.url);

  }

}
