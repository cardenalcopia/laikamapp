import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Pipican } from '../models/pipican';
import { PipicanService } from './pipican.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];
  
  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map ){
    this.map = map;
  }

  flyTo( coords: LngLatLike ){

    if( !this.isMapReady ) throw Error('El mapa no  está inicializado');

    this.map?.flyTo({
      zoom: 14, 
      center: coords
    });

  }

  constructor( 
    public pipicanService: PipicanService,
    public router: Router 
  ) { }

  pipicanInfo( pipican: Pipican ){
    this.pipicanService.pipicanInfo = pipican;

    this.router.navigateByUrl('/pipicanCard');
  }


  createMarkers( pipicanes: Pipican[] ){

    if( !this.map ) throw Error( 'Mapa no inicializado' );

    this.markers.forEach( marker => marker.remove() );

    const newMarkers = [];

    for(const pipican of pipicanes ){

      const longitud = Number(pipican.longitud);

      const latitud = Number(pipican.latitud);

      const calle =  pipican.calle;

      const popup = new Popup()
      .setHTML("<h5>"+ calle +"</h5>" + "<button onclick='pipicanInfo("+pipican+")'>ir...</button>"
        // <span>Información Pipican...</span>
      )
      

      const newMarker = new Marker()
        // .setLngLat([-3.744693, 40.399487])
        .setLngLat([longitud, latitud])
        .setPopup( popup )
        .addTo( this.map )

      newMarkers.push( newMarker );

    }

    this.markers = newMarkers;

  }

}
