import {Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
export const routerConfig: Routes = [
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];