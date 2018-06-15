import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';
import { PageHomeComponent } from './app.page-home';
import { PageAboutComponent } from './app.page-about';
import { PageDetailComponent } from './app.page-detail';
import { MyFooterComponent } from './app.footer';

@NgModule({
  declarations: [
    AppComponent, PageHomeComponent, PageAboutComponent,
    PageDetailComponent, MyFooterComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
