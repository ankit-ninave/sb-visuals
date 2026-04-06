import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Sb.visuals | Luxury Wedding Photography' },
  { path: 'about', component: AboutComponent, title: 'About Us | Sb.visuals' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio | Sb.visuals' },
  { path: 'services', component: ServicesComponent, title: 'Exclusive Offerings | Sb.visuals' },
  { path: 'contact', component: ContactComponent, title: 'Contact & Booking | Sb.visuals' },
  { path: '**', redirectTo: '' }
];
