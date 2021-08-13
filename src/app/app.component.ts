import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    NUMBER_OF_PAGES:number = 5;
    page : number = 1; // this is used to control index highlight
    pageScrolled : number = 1; // this is used to control

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll(event:Event){
        const pageHeight = this.getDocumentHeight() / this.NUMBER_OF_PAGES;
        this.page = Math.floor((window.scrollY + pageHeight/2) / pageHeight + 1);
        this.pageScrolled = Math.floor((window.scrollY - 50) / pageHeight + 1);; // this is used to control
    }

    // helper function to get the correct document height
    getDocumentHeight() : number {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

}
