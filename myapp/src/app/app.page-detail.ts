import { Component } from '@angular/core';

@Component({
    templateUrl: './detail.html'
})

export class PageDetailComponent {
    id: string;
    item;
    constructor(){
        this.item = JSON.parse(sessionStorage.getItem("item0"));
    }
}