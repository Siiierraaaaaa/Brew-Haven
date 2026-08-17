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
      icon: '📍',
      title: 'Visit Us',
      text: '123 Brew Haven Lane, Atlanta, GA'
    },
    {
      icon: '📞',
      title: 'Call Us',
      text: '(404) 555-0123'
    },
    {
      icon: '✉️',
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