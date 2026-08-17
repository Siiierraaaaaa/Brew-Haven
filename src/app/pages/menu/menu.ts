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
      image: '/Images/black-coffee.jpg'
    },
    {
      name: 'Iced Carmel Coffee',
      description: 'Refreshing iced carmel coffee served over ice.',
      price: 4.50,
      image: '/Images/carmel-iced.png'
    },
     {
      name: 'Cold Brew',
      description: 'Rich, smooth brewed coffee over ice.',
      price: 5.00,
      image: '/Images/cold-brew.jpg'
    },
     {
      name: 'Iced Vanilla Latte',
      description: 'Refreshing iced vanilla latte served over ice.',
      price: 5.00,
      image: '/Images/iced-vanilla.jpg'
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
      image: '/Images/crossiant.jpg'
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
      image: '/Images/scone.jpg'
    }
  ];
  drinks =[
    {
      name: 'Strawberry Smothie',
      description: 'Buttery, flaky and baked fresh.',
      price: 5.75,
      image: '/Images/strawberry-smothie.jpg'
    },
    {
      name: 'Banana Smothie',
      description: 'Buttery, flaky and baked fresh.',
      price: 5.75,
      image: '/Images/banana-smothie.jpg'
    },
    {
      name: 'Coconut Smothie',
      description: 'Buttery, flaky and baked fresh.',
      price: 5.75,
      image: '/Images/coconut-smothie.jpg'
    },
  ]
  tea =[
    {
      name: 'Black Tea',
      description: 'Buttery, flaky and baked fresh.',
      price: 4.75,
      image: '/Images/black-tea.jpg'
    },
    {
      name: 'Green Tea',
      description: 'Buttery, flaky and baked fresh.',
      price: 4.75,
      image: '/Images/green-tea.jpg'
    },
    {
      name: 'Aronald Palmer',
      description: 'Buttery, flaky and baked fresh.',
      price: 4.75,
      image: '/Images/arnold-palmer.jpg'
    },
  ]

}