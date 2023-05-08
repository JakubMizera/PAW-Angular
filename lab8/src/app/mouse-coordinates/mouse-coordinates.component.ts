import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, fromEvent, map, filter, debounce, debounceTime, sampleTime } from 'rxjs';

interface mouseCoordinates {
  x: number;
  y: number;
}


@Component({
  selector: 'app-mouse-coordinates',
  templateUrl: './mouse-coordinates.component.html',
  styleUrls: ['./mouse-coordinates.component.scss']
})
export class MouseCoordinatesComponent implements OnInit, OnDestroy {
  private mouseCoordinatesSubscription!: Subscription;
  x = 0;
  y = 0;


  ngOnInit(): void {
    const mouseCoordinates: Observable<mouseCoordinates> = fromEvent(document, 'mousemove').pipe(
      filter((event: Event): event is MouseEvent => event instanceof MouseEvent),
      map((event: MouseEvent) => this.getMouseCoordinates(event)),
      sampleTime(2000),
      filter((mouseCoordinates: mouseCoordinates) => mouseCoordinates.x > 500)
    );

    this.mouseCoordinatesSubscription = mouseCoordinates.subscribe((clickEvent: mouseCoordinates) => {
      this.x = clickEvent.x;
      this.y = clickEvent.y;
    });
  }

  ngOnDestroy(): void {
    this.mouseCoordinatesSubscription.unsubscribe();
  }

  private getMouseCoordinates(event: MouseEvent): mouseCoordinates {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }
}
