import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SbVisuals';
  isScrolled = false;
  isHomePage = true;
  isMenuOpen = false;
  isDarkMode$: any;

  constructor(private router: Router, public themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.isDarkMode$;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/' || event.url === '/home' || event.urlAfterRedirects === '/';
      this.updateHeaderState();
      this.closeMenu();
      this.setupScrollAnimations();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnInit() {
    this.updateHeaderState();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateHeaderState();
  }

  updateHeaderState() {
    if (this.isHomePage) {
      this.isScrolled = window.scrollY > 50;
    } else {
      this.isScrolled = true;
    }
  }

  setupScrollAnimations() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

      document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
      });
    }, 200);
  }
}
