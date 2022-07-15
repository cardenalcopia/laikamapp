import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService, MapService } from '../../services';
import { Pipican } from '../../models/pipican';



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

    this.placesService.getPipicanes()
      .subscribe( (data: Pipican[]) => {

        this.mapService.createMarkers( data )

      })    

    // this.mapService.createMarkers( [new Pipican(2, 'dsjfklasj', 'sakdf', 'dsfkfas', 'dfks', '12', '13')] );


    //Codigo para obtener la distancia

    const start = this.placesService.userLocation!;
    const end   = [-3.4744476, 40.399487] as [number, number];

    this.placesService.getDistancia(start, end)
      .subscribe( data => {
        // console.log( 'kms: ' + data['routes'][0]['distance']/1000 );
      })

  }

  
}
