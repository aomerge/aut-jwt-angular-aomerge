import { provideRouter, Routes } from '@angular/router';
import { routesHome } from './home/home.routes';
import { HomeComponent } from '../components/home/home.component';

export const routes = provideRouter([
    { path: 'first-component', children: routesHome },
    { path: 'home', component: HomeComponent, data: { customClass: 'home-class' } },
    { path: '**', redirectTo: 'home' }
]);