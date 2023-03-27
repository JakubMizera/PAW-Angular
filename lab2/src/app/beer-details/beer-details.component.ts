import { Component, Input, OnInit } from '@angular/core';
import { BeerInfo } from '../types/types';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  @Input() beerDetails?: BeerInfo
  constructor() {}

  ngOnInit(): void {
    console.log(this.beerDetails);
  }
}
