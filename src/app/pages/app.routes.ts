import { provideRouter, Router, Routes } from '@angular/router';
import { routesHome } from './home/home.routes';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'first-component', children: routesHome },
    { path: 'home', component: HomeComponent, data: { customClass: 'home-class' } },
    { path: '**', redirectTo: 'home' }
];