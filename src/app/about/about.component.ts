import { Component, OnInit } from '@angular/core';
import { faBicycle, faHiking, faCampground, faMountain, faPencilAlt, faGuitar } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	hobbies: {name:string, icon:any}[] = [
		{ name: "Guitar"          , icon: faGuitar},
		{ name: "Drawing"         , icon: faPencilAlt},
		{ name: "Climbing"        , icon: faMountain},
		{ name: "Camping"         , icon: faCampground},
		{ name: "Hiking"          , icon: faHiking},
		{ name: "Mountain Biking" , icon: faBicycle},
	]

	languages: {name:string, level:string, image:string}[] = [
		{ name: "Portuguese" , level: "Native"     , image:"assets/flags/pt.svg"},
		{ name: "English"    , level: "Fluent"     , image:"assets/flags/uk.svg"},
		{ name: "Spanish"    , level: "Reasonable" , image:"assets/flags/es.svg"},
		{ name: "French"     , level: "Basic"      , image:"assets/flags/fr.svg"},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
