import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-gallery.component.html',
  styleUrl: './client-gallery.component.css'
})
export class ClientGalleryComponent {
  password = '';
  isUnlocked = false;
  loginError = false;

  // Mock database of client galleries
  private galleries = [
    {
      couple: 'Ananya & Rahul',
      weddingDate: '141125', // ddmmyy
      imageCount: 450,
      coverImg: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  unlockedGallery: any = null;

  checkPassword() {
    const gallery = this.galleries.find(g => g.weddingDate === this.password);
    if (gallery) {
      this.isUnlocked = true;
      this.unlockedGallery = gallery;
      this.loginError = false;
    } else {
      this.loginError = true;
      this.password = '';
    }
  }

  logout() {
    this.isUnlocked = false;
    this.unlockedGallery = null;
    this.password = '';
  }
}
