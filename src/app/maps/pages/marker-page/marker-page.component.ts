import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker;
}

@Component({
  selector: 'app-marker-page',
  templateUrl: './marker-page.component.html',
  styleUrls: ['./marker-page.component.css']
})
export class MarkerPageComponent  {
[x: string]: any;


  @ViewChild('map') divMap? : ElementRef;

  public markers: MarkerAndColor[] = [];


  public map?: Map;
  public currentlngLat : LngLat = new LngLat(-3.7893472998610207, 37.770972218851796);

  ngAfterViewInit(): void {

    if ( !this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
  }

  //   const markerHtml = document.createElement('div');
  //   markerHtml.innerHTML = 'Fran Liebanas'

  //   const marker = new Marker(
  //     {color: 'red'}
  //   )
  //     .setLngLat( this.currentlngLat)
  //     .addTo(this.map);

  // }

  createMarker(){
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }


  addMarker( lngLat: LngLat, color: string){
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });
  }

  deleteMarker(index : number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    }


}
