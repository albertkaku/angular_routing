import { Component } from '@angular/core';
import { FoodItem }  from './app.foodItem';

@Component({
    templateUrl: './home.html'
})

export class PageHomeComponent {
    items;
    index;
  
    constructor() {
        this.items = [];
        this.index = 0;
        while (sessionStorage.getItem("item" + this.index)) {
            this.items.push(JSON.parse(sessionStorage.getItem("item" + this.index)));
            this.index++;
        }
        this.index = 1;
    }
}