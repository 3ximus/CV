import { Component, OnInit } from '@angular/core';

import { IconDefinition, faGitAlt, faAngular, faPython, faDocker, faSass, faJava, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faCopyright, faTerminal, faFileAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: {name:string, value:number, icon:IconDefinition}[] = [
		{ name: "Angular 2"	     , value: 65 , icon: faAngular},
		{ name: "JavaScript"	 , value: 60 , icon: faJsSquare},
		{ name: "Python"		 , value: 95 , icon: faPython},
		{ name: "Django"		 , value: 80 , icon: faPython},
		{ name: "Flutter"		 , value: 35 , icon: faMobileAlt},
		{ name: "Docker"		 , value: 60 , icon: faDocker},
		{ name: "SQL"			 , value: 50 , icon: faDatabase},
		{ name: "Git"			 , value: 90 , icon: faGitAlt},
		{ name: "Sass"			 , value: 65 , icon: faSass},
		{ name: "Bash scripting" , value: 90 , icon: faTerminal},
		{ name: "Java"			 , value: 70 , icon: faJava},
		{ name: "C/C++"			 , value: 70 , icon: faCopyright},
		{ name: "LaTeX"			 , value: 50 , icon: faFileAlt},
	];

	constructor() { }

	ngOnInit(): void {
	}
}
