import { Component, OnInit } from '@angular/core';

import { IconDefinition, faGitAlt, faAngular, faPython, faDocker, faSass, faJava, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons';


@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: {name:string, value:number, ref?:string, icon?:IconDefinition, image?:string}[] = [
		{ name: "Angular 2"	     , value: 65 , ref: "angus", icon: faAngular},
		{ name: "JavaScript"	 , value: 60 , icon: faJsSquare},
		{ name: "Python"		 , value: 95 , icon: faPython},
		{ name: "Django"		 , value: 80 , image: "assets/skills/django_logo.svg"},
		{ name: "Flutter"		 , value: 35 , image: "assets/skills/flutter_logo.svg"},
		{ name: "Docker"		 , value: 60 , icon: faDocker},
		{ name: "SQL"			 , value: 50 , image: "assets/skills/sql_logo.svg"},
		{ name: "php"			 , value: 50 , ref: "test", icon: faPhp},
		{ name: "Git"			 , value: 90 , icon: faGitAlt},
		{ name: "Sass"			 , value: 65 , icon: faSass},
		{ name: "Bash scripting" , value: 90 , image: "assets/skills/bash_logo.svg"},
		{ name: "Java"			 , value: 60 , icon: faJava},
		{ name: "C/C++"			 , value: 70 , image: "assets/skills/c_logo.svg"},
		{ name: "LaTeX"			 , value: 40 , image: "assets/skills/latex_logo.svg"},
	];

	constructor() { }

	ngOnInit(): void {
	}
}
