import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    template: `@ {{date | date:'MMMM d, yyyy'}}`
})

export class MyFooterComponent {
    date: Date;

    constructor() {
        this.date = new Date()
    }
}
