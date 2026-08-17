import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class Gallery {

  photos = [
    {
      image: '/Images/Coffee-1.jpg',
      title: 'Brew Haven Coffee'
    },
    {
      image: '/Images/Coffee-2.jpg',
      title: 'Freshly Brewed'
    },
    {
      image: '/Images/Coffee-3.jpg',
      title: 'Coffee & Pastries'
    },
    {
      image: '/Images/Coffee-4.jpg',
      title: 'Cozy Cafe'
    },
    {
      image: '/Images/Coffee-and-food-1.jpg',
      title: 'Coffee and Food'
    },
    {
      image: '/Images/Coffee-and-food-2.jpg',
      title: 'Fresh Favorites'
    },
    {
      image: '/Images/Coffee-Pour.jpg',
      title: 'Coffee Pour'
    },
    {
      image: '/Images/Coffee-store-1.jpg',
      title: 'Our Cafe'
    },
    {
      image: '/Images/Coffee-store-2.jpg',
      title: 'Brew Haven'
    },
    {
      image: '/Images/Coffee-store-3.jpg',
      title: 'Inside Brew Haven'
    },
    {
      image: '/Images/Coffee-store-4.jpg',
      title: 'Cafe Atmosphere'
    },
    {
      image: '/Images/Coffee-store-5.jpg',
      title: 'Our Coffee Shop'
    }
  ];

}