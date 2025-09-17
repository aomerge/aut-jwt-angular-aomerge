import { Routes } from '@angular/router';
import { HomeComponent } from "../../components/home/home.component";
import { AboutComponent } from '../../components/home/about.component';


export const routesHome: Routes = [
    {
        path: 'Home',
        component: AboutComponent
    }
];