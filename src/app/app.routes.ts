import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WishComponent } from './components/wish/wish.component';
import { PublicComponent } from './components/public/public.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'gui-loi-chuc',
        component: WishComponent
    },
    {
        path: 'cong-khai-quy',
        component: PublicComponent
    },
];