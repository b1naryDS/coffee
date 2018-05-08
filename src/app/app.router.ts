import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {CoffeesComponent} from './coffees/coffees.component';
import { VjezbaComponent } from './vjezba/vjezba.component';

export const router: Routes= [
    {path: '', redirectTo: 'vjezba',pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'coffees', component: CoffeesComponent},
    {path: 'vjezba', component: VjezbaComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);