import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZnJhbmxpZWJhbmFzIiwiYSI6ImNseDRsOWc3eDBmYzIyanF0dWp1ZDc5dWkifQ.vfbIIRmbb27AX1e7cB31gw';


@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }




}
