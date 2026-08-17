import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-online',
  imports: [FormsModule],
  templateUrl: './order-online.html',
  styleUrls: ['./order-online.css'],
})
export class OrderOnline {

  // Controls which part of the ordering process the user sees
 checkoutStep: 'cart' | 'checkout' | 'confirmation' = 'cart';

  // Current category
  selectedCategory = 'Coffee';

  // Controls whether the cart is being displayed
  showingCart = false;

  // Customer information
  customerName = '';
  customerEmail = '';
  customerPhone = '';

  // Generated order number
  orderNumber = '';


  // =========================
  // MENU ITEMS
  // =========================

  menuItems = [

    {
      id: 1,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },

    {
      id: 2,
      category: 'Coffee',
      name: 'Iced Coffee',
      description: 'Refreshing iced coffee served over ice.',
      price: 4.50,
      image: '/Images/carmel-iced.png',
      quantity: 0
    },

    {
      id: 3,
      category: 'Cold Drinks',
      name: 'Iced Matcha',
      description: 'Smooth matcha blended with creamy milk and ice.',
      price: 5.00,
      image: '/Images/iced-matcha.png',
      quantity: 0
    },

    {
      id: 4,
      category: 'Pastries',
      name: 'Fresh Croissant',
      description: 'Buttery, flaky and baked fresh.',
      price: 3.75,
      image: '/Images/Coffee-and-food-1.jpg',
      quantity: 0
    },

    {
      id: 5,
      category: 'Pastries',
      name: 'Chocolate Pastry',
      description: 'A sweet pastry made for pairing with coffee.',
      price: 4.25,
      image: '/Images/Coffee-and-food-2.jpg',
      quantity: 0
    },

    {
      id: 6,
      category: 'Pastries',
      name: 'Daily Pastry',
      description: 'Ask about our fresh pastry of the day.',
      price: 4.00,
      image: '/Images/Coffee-3.jpg',
      quantity: 0
    },
     {
      id: 7,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 8,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 9,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 10,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 11,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 12,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 13,
      category: 'Coffee',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },
     {
      id: 14,
      category: 'Smoothie',
      name: 'Traditional Coffee',
      description: 'Rich, smooth brewed coffee made fresh every day.',
      price: 3.50,
      image: '/Images/black-coffee.png',
      quantity: 0
    },

  ];


  // =========================
  // CATEGORY
  // =========================

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.showingCart = false;
  }


  // =========================
  // CART
  // =========================

  showCart(): void {
    this.showingCart = true;
    this.checkoutStep = 'cart';
  }


  addToCart(item: any): void {
    item.quantity++;
  }


  removeFromCart(item: any): void {

    if (item.quantity > 0) {
      item.quantity--;
    }

  }


  get filteredItems() {

    return this.menuItems.filter(
      item => item.category === this.selectedCategory
    );

  }


  get cartItems() {

    return this.menuItems.filter(
      item => item.quantity > 0
    );

  }


  get cartCount(): number {

    return this.menuItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

  }


  get subtotal(): number {

    return this.menuItems.reduce(
      (total, item) =>
        total + (item.price * item.quantity),
      0
    );

  }


  get tax(): number {

    return this.subtotal * 0.08;

  }


  get total(): number {

    return this.subtotal + this.tax;

  }


  // =========================
  // CHECKOUT
  // =========================

  startCheckout(): void {

    if (this.cartItems.length === 0) {
      return;
    }

    this.checkoutStep = 'checkout';
    this.showingCart = false;

  }


  // =========================
  // PLACE ORDER
  // =========================

  placeOrder(): void {

    this.orderNumber =
      'BH-' +
      Math.floor(1000 + Math.random() * 9000);

    this.checkoutStep = 'confirmation';

  }


  // =========================
  // BACK TO CART
  // =========================

  backToCart(): void {

    this.checkoutStep = 'cart';
    this.showingCart = true;

  }


  // =========================
  // START NEW ORDER
  // =========================

  startNewOrder(): void {

    this.menuItems.forEach(item => {
      item.quantity = 0;
    });

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';

    this.orderNumber = '';

    this.checkoutStep = 'cart';
    this.showingCart = false;
    this.selectedCategory = 'Coffee';

  }

}