import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker } from 'mapbox-gl';
import { Pipican } from '../models/pipican';

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

  createMarkers( pipicanes: Pipican[] ){

    if( !this.map ) throw Error( 'Mapa no inicializado' );

    this.markers.forEach( marker => marker.remove() );

    const newMarkers = [];

    for(const pipican of pipicanes ){

      //revisar codigo de abajo para poner el nombre real de la propiedad del pipica tanto long como lat

      const longitud = Number(pipican.longitud);

      const latitud = Number(pipican.latitud);

      const newMarker = new Marker()
        // .setLngLat([-3.744693, 40.399487])
        .setLngLat([longitud, latitud])
        .addTo( this.map )

      newMarkers.push( newMarker );

    }

    this.markers = newMarkers;

  }

  constructor() { }
}
