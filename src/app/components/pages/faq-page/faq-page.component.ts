import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: `assets/img/page-title/banner.jpg`, // page-title3.jpg
            title: `Frequently Asked Questions`,
        }
    ]

}