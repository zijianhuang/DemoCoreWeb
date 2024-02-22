import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DemoWebApi_Controllers_Client, } from '../../clientapi/WebApiCoreNg2ClientAuto';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero?: DemoWebApi_Controllers_Client.Hero;
    constructor(
        private heroService: DemoWebApi_Controllers_Client.Heroes,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            const id = +params['id'];
            this.heroService.getHero(id.toString()).subscribe({
                next: hero => {
                    if (hero) {
                        this.hero = hero;
                    }
                },
                error: error => alert(error)
            });
        });
    }

    save(): void {
        if (this.hero) {
            this.heroService.put(this.hero!).subscribe(
                {
                    next: d => {
                        console.debug('response: ' + JSON.stringify(d));
                    },
                    error: error => alert(error)
                }
            );
        }
    }
    goBack(): void {
        this.location.back();
    }

}
