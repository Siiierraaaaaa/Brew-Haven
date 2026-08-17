import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {

  coffee = [
    {
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png'
    },
    {
      name: 'Iced Coffee',
      description: 'Refreshing iced coffee served over ice.',
      price: 4.50,
      image: '/Images/carmel-iced.png'
    },
    {
      name: 'Iced Matcha',
      description: 'Smooth matcha blended with creamy milk and ice.',
      price: 5.00,
      image: '/Images/iced-matcha.png'
    }
  ];

  pastries = [
    {
      name: 'Fresh Croissant',
      description: 'Buttery, flaky and baked fresh.',
      price: 3.75,
      image: '/Images/Coffee-and-food-1.jpg'
    },
    {
      name: 'Chocolate Pastry',
      description: 'A sweet pastry made for pairing with coffee.',
      price: 4.25,
      image: '/Images/Coffee-and-food-2.jpg'
    },
    {
      name: 'Daily Pastry',
      description: 'Ask about our fresh pastry of the day.',
      price: 4.00,
      image: '/Images/Coffee-3.jpg'
    }
  ];

}