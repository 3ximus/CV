import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { IconDefinition, faGit, faAngular, faPython, faDocker, faSass, faJava } from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faCopyright, faTerminal, faFileAlt, faMobileAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: {name:string, value:number, icon:any}[] = [
		{ name: "Angular JS"	 , value: 50 , icon: faAngular},
		{ name: "Python"		 , value: 90 , icon: faPython},
		{ name: "Django"		 , value: 80 , icon: faPython},
		{ name: "Flask"			 , value: 60 , icon: faPython},
		{ name: "Flutter"		 , value: 60 , icon: faMobileAlt},
		{ name: "Docker"		 , value: 60 , icon: faDocker},
		{ name: "SQL"			 , value: 50 , icon: faDatabase},
		{ name: "Git"			 , value: 90 , icon: faGit},
		{ name: "Sass"			 , value: 60 , icon: faSass},
		{ name: "Bash scripting" , value: 90 , icon: faTerminal},
		{ name: "Java"			 , value: 70 , icon: faJava},
		{ name: "C/C++"			 , value: 70 , icon: faCopyright},
		{ name: "LaTeX"			 , value: 50 , icon: faFileAlt},
	];
	backdropIcon:IconDefinition = faGit;
	@ViewChild('backdropElement') backdropElement! : ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	changeIcon(ico:IconDefinition) : void {
		this.backdropIcon = ico;
		this.backdropElement.nativeElement.style.opacity = 0.04;
	}

	hideIcon(): void {
		this.backdropElement.nativeElement.style.opacity = 0;
	}
}
