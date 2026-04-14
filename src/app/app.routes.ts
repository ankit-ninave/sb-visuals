import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'SbVisuals | Luxury Wedding Photography' },
  { path: 'about', component: AboutComponent, title: 'About Us | SbVisuals' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | SbVisuals' },
  { path: 'services', component: ServicesComponent, title: 'Exclusive Offerings | SbVisuals' },
  { path: 'contact', component: ContactComponent, title: 'Contact & Booking | SbVisuals' },
  {
    path: 'story/:id',
    loadComponent: () => import('./pages/story/story.component').then(m => m.StoryComponent),
    title: 'Wedding Story | SbVisuals'
  },
  {
    path: 'client-gallery',
    loadComponent: () => import('./pages/client-gallery/client-gallery.component').then(m => m.ClientGalleryComponent),
    title: 'Private Client Gallery | SbVisuals'
  },
  { path: '**', redirectTo: '' }
];
