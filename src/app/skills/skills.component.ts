import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	skills: {name:string, value:number}[] = [
		{ name: "Angular JS"     , value: 50 },
		{ name: "Python"         , value: 90 },
		{ name: "Django"         , value: 80 },
		{ name: "Flask"          , value: 60 },
		{ name: "MongoDB"        , value: 60 },
		{ name: "Docker"         , value: 60 },
		{ name: "SQL"            , value: 50 },
		{ name: "Git"            , value: 90 },
		{ name: "Sass"           , value: 60 },
		{ name: "Bash scripting" , value: 90 },
		{ name: "Java"           , value: 70 },
		{ name: "C/C++"          , value: 70 },
		{ name: "LaTeX"          , value: 50 },
	];

	constructor() { }

	ngOnInit(): void {
	}

}
