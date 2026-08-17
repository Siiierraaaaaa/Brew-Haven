import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

  contactInfo = [
    {
      icon: '/Images/map-icon.png',
      title: 'Visit Us',
      text: '123 Coffee Lane, New Orleans, LA 70119'
    },
    {
      icon: '/Images/phone-icon.png',
      title: 'Call Us',
      text: '(504) 123-4567'
    },
    {
      icon: '/Images/email-icon.png',
      title: 'Email Us',
      text: 'hello@brewhavencoffee.com'
    }
  ];

  hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 5:00 PM' }
  ];

}