import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {

  features = [
    {
      title: 'Premium Beans',
      description: 'We carefully select quality coffee beans to create rich and flavorful drinks.'
    },
    {
      title: 'Fresh Pastries',
      description: 'Our pastries are made fresh to pair perfectly with your favorite coffee.'
    },
    {
      title: 'Cozy Atmosphere',
      description: 'Brew Haven is a comfortable neighborhood space where you can relax, work, or connect.'
    }
  ];

}