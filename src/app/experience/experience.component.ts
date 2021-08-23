import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    experiences: {title:string, date:string, title_extended:string, description:string, image:string}[] = [
        {
            title: "AtmosMarine",
            date: "2021",
            title_extended:"Website Development for AtmosMarine (Freelance)",
            description:"Full website development/design using the Django framework.",
            image:"assets/atm_logo.png"
        }, {
            title: "CENTEC",
            date: "2020 - 2021",
            title_extended:"Researcher at CENTEC (Centre for Marine Technology and Ocean Engineering)",
            description:"Weather forecast research using machine Learning Techniques. Weather database creation/management. Website Development with Angular2.",
            image:"assets/centec_logo.png"
        }, {
            title: "Metafora Notavel",
            date: "2018 - 2020",
            title_extended:"University Programming Teacher Metafora Notavel",
            description:"Part-Time programming teacher in a teaching center for university students.",
            image:"assets/metafora_logo.png"
        }, {
            title: "Tekever",
            date: "2018 - 2019",
            title_extended:"Partnership with Tekever for Thesis Development",
            description:"Developing an Intrusion Detection System with machine learning techniques with Tekever's Cyber-Security Team. Project used for my thesis.",
            image:"assets/tekever_logo.png"
        }, {
            title: "Sonae",
            date: "2015",
            title_extended:"Summer Internship at Sonae Industria",
            description:"Full-Time Internship at Sonae's manufacturing plant. Warehouse inventory management.",
            image:"assets/sonae_logo.png"
        },
    ]

    selected:number=-1;

    constructor() { }

    ngOnInit(): void { }

    setClick(i:number) {
        this.selected = i == this.selected ? -1 : i;
    }

}
