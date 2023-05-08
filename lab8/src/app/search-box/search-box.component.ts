import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, filter, map, scan } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() searchValueChanged = new EventEmitter<string>();
  private searchValueSubject = new Subject<string>();

  constructor() {
    this.searchValueSubject.pipe(
      debounceTime(300),
      filter((value) => value !== ''),
    ).subscribe((value) => {
      this.searchValueChanged.emit(value);
    });
  }

  onSearchInput(event: Event) {
    const searchValue = (event.target as HTMLInputElement)?.value;
    this.searchValueSubject.next(searchValue);
  }
}
