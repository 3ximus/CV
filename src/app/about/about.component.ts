import { Component, OnInit } from '@angular/core';
import { faBicycle, faHiking, faCampground, faMountain, faPencilAlt, faGuitar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	hobbies: {name:string, icon:any}[] = [
		{ name: "Mountain Biking" , icon: faBicycle},
		{ name: "Hiking"          , icon: faHiking},
		{ name: "Camping"         , icon: faCampground},
		{ name: "Climbing"        , icon: faMountain},
		{ name: "Drawing"         , icon: faPencilAlt},
		{ name: "Guitar"          , icon: faGuitar},
	]

	languages: {name:string, level:string, image:string}[] = [
		{ name: "Portuguese" , level: "Native"     , image:"https://lipis.github.io/flag-icon-css/flags/4x3/pt.svg"} ,
		{ name: "English"    , level: "Fluent"     , image:"https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg"} ,
		{ name: "Spanish"    , level: "Reasonable" , image:"https://lipis.github.io/flag-icon-css/flags/4x3/es.svg"} ,
		{ name: "French"     , level: "Baguette"   , image:"https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg"} ,
	]

	constructor() { }

	ngOnInit(): void {
	}

}
