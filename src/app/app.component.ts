import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    NUMBER_OF_PAGES:number = 5;
    page : number = 1;
    indexItemsOnPage : number[] = Array(this.NUMBER_OF_PAGES).fill(1); // this is used to control index highlight
    arrowScrollPage : number = 1; // this is used to control

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll(event:Event){
        const pageHeight = this.getDocumentHeight() / this.NUMBER_OF_PAGES;
        this.arrowScrollPage = Math.floor((window.scrollY - 70) / pageHeight + 1);
        this.indexItemsOnPage[0] = Math.floor((window.scrollY + pageHeight/2 - 140) / pageHeight + 1);
        this.indexItemsOnPage[1] = Math.floor((window.scrollY + pageHeight/2 - 70) / pageHeight + 1);
        this.page = this.indexItemsOnPage[2] = Math.floor((window.scrollY + pageHeight/2) / pageHeight + 1);
        this.indexItemsOnPage[3] = Math.floor((window.scrollY + pageHeight/2 + 70) / pageHeight + 1);
        this.indexItemsOnPage[4] = Math.floor((window.scrollY + pageHeight/2 + 140) / pageHeight + 1);
    }

    // helper function to get the correct document height
    getDocumentHeight() : number {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    goTo(url: string) {
        window.open(url);
    }

}
