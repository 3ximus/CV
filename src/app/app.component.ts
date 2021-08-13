import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private NUMBER_OF_PAGES:number = 4;
    page : number = 1; // this is used to control index highlight

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll(event:Event){
        this.page = Math.floor((window.scrollY + 100) / (this.getDocumentHeight() / this.NUMBER_OF_PAGES) + 1);
        console.log(this.page);
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
