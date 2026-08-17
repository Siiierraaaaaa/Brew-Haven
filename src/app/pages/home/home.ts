import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  // Why Us section
  whyUs = [
    {
      image: 'images/WhyUS-icon-1.png',
      text: 'Premium Beans'
    },
    {
      image: 'images/WhyUS-icon.png',
      text: 'Fresh Pastries'
    },
    {
      image: 'images/WhyUS-icon-2.png',
      text: 'Free Wifi'
    },
    {
      image: 'images/WhyUS-icon-3.png',
      text: 'Locally Roasted'
    }
  ];

  // Testimonials
  testimonials = [
    {
      name: 'Jessica M.',
      message: 'The coffee is the best ive ever tasted!',
      rating: 5
    },
    {
      name: 'David L.',
      message: 'Cozy vibes, great service, and even better coffee',
      rating: 5
    },
    {
      name: 'Sarah K.',
      message: 'I come here every week. Highly reccommend!',
      rating: 5
    }
  ];

  // Currently open modal
  activeModal: string | null = null;

  // Open a modal
  openModal(modalId: string): void {
    this.activeModal = modalId;
  }

  // Close the modal
  closeModal(): void {
    this.activeModal = null;
  }

}