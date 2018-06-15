import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageHomeComponent }     from './app.page-home';
import { PageAboutComponent }    from './app.page-about';
import { PageDetailComponent }   from './app.page-detail';


const appRoutes: Routes = [
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-about', component: PageAboutComponent },
  { path: 'page-detail/:id', component: PageDetailComponent },
  { path: '', redirectTo: '/page-home', pathMatch: 'full' },
  { path: '**', component: PageHomeComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
