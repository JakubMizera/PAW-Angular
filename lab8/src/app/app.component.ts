import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab8';
  onSearch(searchValue: string) {
    console.log('Wyszukaj: ' + searchValue);
    // dodaj kod wyszukiwania
  }
}
