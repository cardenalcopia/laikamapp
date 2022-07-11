import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( 
    private placesService: PlacesService,
    private mapService: MapService
  ) { }

  ngAfterViewInit(): void {

    if( !this.placesService.userLocation ) throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.userLocation,
      zoom: 14,
    });

    const popup = new Popup()
      .setHTML(`
        <h4>Pipican</h4>
        <span>Información Pipican...</span>
      `);

    new Marker({color: 'red'})
      .setLngLat(this.placesService.userLocation)
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap( map );

  }

  
}
