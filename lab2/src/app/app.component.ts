import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';
  revenue1 = '$50,000';
  revenue2 = '$1,250';
  green = 'rgb(66, 194, 66)';
  purple = 'rgb(127, 90, 237)';
  revenueTitle1 = 'total revenue';
  revenueTitle2 = 'revenue';
  image1 = "./../../assets/sack-dollar-solid.svg";
  image2 = "./../../assets/cart-shopping-solid.svg";
}
