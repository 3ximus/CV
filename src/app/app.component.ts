import { Component, HostListener, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    NUMBER_OF_PAGES:number = 5;
    currentPage : number = 0; // this is used to control selected index color
    sidebarLinkController: string[] = Array(99).fill(''); // this is used to control sidebar link color (contains the class name to be used)
    sidebarTooltipController: string[] = Array(2).fill('');
    arrowPageController: string = ''; // this is used to control scroll indicator color

    @ViewChildren('sidebarLink') links!: QueryList<ElementRef>;
    @ViewChildren('sidebarTooltip') tooltips!: QueryList<ElementRef>;
    @ViewChild('scrollArrow') scrollArrow!: ElementRef;

    ngAfterViewInit(): void {
        this.sidebarLinkController =  Array(this.links.length).fill('');
    }

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll(event:Event){
        const pageHeight = this.getDocumentHeight() / this.NUMBER_OF_PAGES;
        this.currentPage = Math.floor((window.scrollY + pageHeight/2) / pageHeight); // middle of the page

        // color scroll arrow
        if (this.scrollArrow)
            // use clientWidth because element is rotated
            this.arrowPageController = Math.floor((window.scrollY + this.scrollArrow.nativeElement.getBoundingClientRect().top + this.scrollArrow.nativeElement.clientWidth/2) / pageHeight) % 2 ? 'dark' : '';

        // color sidebar elements
        this.links.forEach((item, i) => { //  set the page that each item is in
            this.sidebarLinkController[i] = Math.floor((window.scrollY + item.nativeElement.getBoundingClientRect().top + item.nativeElement.clientHeight/2) / pageHeight) % 2 ? 'dark' : '';
        });

        // color sidebar tooltips
        this.tooltips.forEach((item, i) => {
            this.sidebarTooltipController[i] = Math.floor((window.scrollY + item.nativeElement.getBoundingClientRect().top + item.nativeElement.clientHeight/2) / pageHeight) % 2 ? 'dark' : '';
        });
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
