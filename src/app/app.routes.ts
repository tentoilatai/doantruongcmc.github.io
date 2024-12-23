import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WishComponent } from './components/wish/wish.component';
import { PublicComponent } from './components/public/public.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FirstWordComponent } from './components/first-word/first-word.component';
import { QrComponent } from './components/qr/qr.component';

export const routes: Routes = [
    {
        path: '',
        component: FirstWordComponent
    },
    {
        path: 'ho-so-tai-tro',
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
    {
        path: 'thu-vien',
        component: GalleryComponent
    },
    {
        path: 'ung-ho',
        component: QrComponent
    }
];