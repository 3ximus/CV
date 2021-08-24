import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	private router: Router;

	constructor(private route: ActivatedRoute, router: Router) {
		this.router = router;
	}

	ngOnInit(): void {
		// get route parameters
		// skil_type = String(this.route.snapshot.paramMap.get('skill'));
	}

	@HostListener('document:keydown.escape', ['$event'])
	handleEscapeKey(event: KeyboardEvent) {
		if (event.key === "Escape") this.closeModal();
	}

	public closeModal() : void {
		this.router.navigate(
			[ "/", { outlets: { view: null } } ]
		);
	}


}
