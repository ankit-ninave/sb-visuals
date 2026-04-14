import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface GalleryItem {
  id: string;
  url: string;
  category: string;
  title: string;
  storyId?: string;
  label?: string; // e.g., 'Best Shot', 'Golden Moment'
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  categories = ['All Stories', 'Weddings', 'Pre-Wedding', 'Films', 'Editorial'];
  selectedCategory = 'All Stories';
  
  // Lightbox state
  selectedImage: GalleryItem | null = null;

  galleryItems: GalleryItem[] = [
    { id: '1', url: 'https://images.pexels.com/photos/1575939/pexels-photo-1575939.jpeg?fm=webp&w=800', category: 'Weddings', title: 'The Bridal Gaze', storyId: 'ananya-rahul', label: 'Best Shot' },
    { id: '2', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=webp&w=800&q=1200', category: 'Editorial', title: 'Bridal Portrait', label: 'Golden Moment' },
    { id: '3', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?fm=webp&w=800&q=80', category: 'Weddings', title: 'Ceremony Details' },
    { id: '4', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?fm=webp&w=800&q=1000', category: 'Weddings', title: 'Sacred Ritual', label: 'Best Shot' },
    { id: '5', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?fm=webp&w=800&q=80', category: 'Pre-Wedding', title: 'Intimate Moments' },
    { id: '6', url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?fm=webp&w=800&q=1100', category: 'Weddings', title: 'Palace Wedding', label: 'Golden Moment' },
    { id: '7', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?fm=webp&w=800&q=80', category: 'Editorial', title: 'Jewellery Detail' },
    { id: '8', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?fm=webp&w=800&q=900', category: 'Films', title: 'Wedding Film' },
    { id: '9', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=webp&w=800&q=80', category: 'Pre-Wedding', title: 'Pre-Wedding Film', label: 'Best Shot' },
    { id: '10', url: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?fm=webp&w=800&q=80', category: 'Films', title: 'Cinematic Highlights' }
  ];

  constructor(private router: Router) {}

  get filteredItems() {
    if (this.selectedCategory === 'All Stories') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  openLightbox(item: GalleryItem) {
    this.selectedImage = item;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  viewStory(storyId: string) {
    this.router.navigate(['/story', storyId]);
    document.body.style.overflow = 'auto';
  }
}
