import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChartSimple, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medium-chart',
  templateUrl: './medium-chart.component.html',
  styleUrls: ['./medium-chart.component.scss', './../../container.scss']
})
export class MediumChartComponent {
  faChartSimple = faChartSimple;
  down = faArrowDown;
  up = faArrowUp;

  @Input() title!: string;
  @Input() value!: string;
  @Input() arrow!: string;
  @Input() isUp!: IconDefinition;
  @Input() color!: string;
  @Input() procentageValue!: string;
}
