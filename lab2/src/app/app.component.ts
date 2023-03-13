import { Component } from '@angular/core';
import { faArrowDown, faArrowUp, faSackDollar, faCartShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2';

  revenue1 = '$50,000';
  revenue2 = '$1,250';
  green = 'rgb(74, 217, 145)';
  purple = 'rgb(187, 184, 252)';
  red = 'rgb(255, 74, 74)';
  revenueTitle1 = 'total revenue';
  revenueTitle2 = 'revenue';
  image1 = faSackDollar;
  image2 = faCartShopping;
  image3 = faEllipsis;

  mediumTitle1 = 'total earnings';
  mediumTitle2 = 'products sold';
  value1 = '$39K';
  value2 = '2453';
  procentageValue = '13.8%';
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
}
