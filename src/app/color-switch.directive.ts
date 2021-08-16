import { Directive, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[appColorSwitch]'
})
export class ColorSwitchDirective implements AfterViewInit {
	NUMBER_OF_PAGES:number = 0;

	constructor(private el: ElementRef) { }

	ngAfterViewInit(): void {
		this.NUMBER_OF_PAGES = document.getElementsByClassName('page').length;
	}

	@HostListener("window:scroll")
	onWindowScroll() {
		const pageHeight = this.getDocumentHeight() / this.NUMBER_OF_PAGES;
		if (Math.floor((window.scrollY + this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.clientHeight/2) / pageHeight) % 2)
			this.el.nativeElement.classList.add('dark');
		else
			this.el.nativeElement.classList.remove('dark');
	}

	getDocumentHeight() : number {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	}

}
