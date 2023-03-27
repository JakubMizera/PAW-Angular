import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { BeerInfo } from '../types/types';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers?: BeerInfo[];
  isOn = false;
  constructor(private myDataService: BeerService) { }

  ngOnInit(): void {
    this.myDataService.getBeer().subscribe((response) => {
      this.beers = response;
      console.log(response);
    });
  }
}
