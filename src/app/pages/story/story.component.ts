import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Story {
  id: string;
  couple: string;
  date: string;
  location: string;
  caption: string;
  heroImage: string;
  categories: {
    title: string;
    description: string;
    images: string[];
  }[];
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {
  story: Story | null = null;
  activeCategoryIndex = 0;

  private stories: Story[] = [
    {
      id: 'ananya-rahul',
      couple: 'Ananya & Rahul',
      date: 'November 14, 2025',
      location: 'City Palace, Udaipur',
      caption: 'A regal union where tradition met timeless elegance against the golden sunsets of Rajasthan.',
      heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=webp&w=1920&q=80',
      categories: [
        {
          title: 'Haldi',
          description: 'A morning filled with laughter, turmeric, and family festivities by the palace lake. The yellow hues danced against the marble carvings.',
          images: [
            'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1583939003579-730e3918a45a?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=webp&w=800&q=80'
          ]
        },
        {
          title: 'Mehendi',
          description: 'Intricate henna patterns and celebration under the Udaipur sun. Every stroke told a story of heritage.',
          images: [
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1520854221256-17451cc331bf?fm=webp&w=800&q=80'
          ]
        },
        {
          title: 'Wedding',
          description: 'The royal vow exchange as the sun set behind the historic City Palace. A moment frozen in time.',
          images: [
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?fm=webp&w=1200&q=80',
            'https://images.unsplash.com/photo-1519741497674-611481863552?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?fm=webp&w=800&q=80'
          ]
        },
        {
          title: 'Reception',
          description: 'A grand finale under a canopy of a thousand lights. The beginning of a new chapter.',
          images: [
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?fm=webp&w=1200&q=80',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?fm=webp&w=800&q=80',
            'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?fm=webp&w=800&q=80'
          ]
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.story = this.stories.find(s => s.id === id) || this.stories[0];
  }

  setActiveCategory(index: number) {
    this.activeCategoryIndex = index;
  }
}
