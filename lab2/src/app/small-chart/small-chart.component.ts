import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-small-chart',
  templateUrl: './small-chart.component.html',
  styleUrls: ['./small-chart.component.scss', './../../container.scss']
})
export class SmallChartComponent {
  @Input() revenue!: string;
  @Input() title!: string;
  @Input() color!:string;
  @Input() image!: IconDefinition;
  @Input() options!: IconDefinition;
}
