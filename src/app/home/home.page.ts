import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Map,tileLayer,marker} from 'leaflet';
import * as L from 'leaflet';

 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	map:any;
	
	constructor(){

	}

  ngOnInit() {

  	
  	
  	
  }

  ionViewDidEnter(){

  	this.map = L.map('mapId').setView([ 10.22492, -66.86741 ], 6);
  	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(this.map);

  	const markPoint = L.marker([ 10.22492, -66.86741 ]);
  	markPoint.bindPopup('<p>Industrias Amapola</p>');
  	this.map.addLayer(markPoint);

  }
  	

}
