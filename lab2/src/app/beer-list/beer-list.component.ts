import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  myBeer: any;
  constructor(private myDataService: BeerService) { }


  ngOnInit(): void {
    this.myDataService.getBeer().subscribe((data) => {
      this.myBeer = data;
    });
  }
}
