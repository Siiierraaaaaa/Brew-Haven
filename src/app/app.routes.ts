import { Routes } from '@angular/router';
import { Home as HomeComponent } from './pages/home/home';
import { About as AboutComponent } from './pages/about/about';
import { Contact as ContactComponent } from './pages/contact/contact';
import { Gallery as GalleryComponent } from './pages/gallery/gallery';
import { Menu as MenuComponent } from './pages/menu/menu';
import { OrderOnline as OrderOnlineComponent } from './pages/order-online/order-online';



export const routes: Routes = [
      {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'order-online',
    component: OrderOnlineComponent
  }
];
