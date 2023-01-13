import {Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';

export const routerConfig: Routes = [
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