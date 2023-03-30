import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-styles-input',
  templateUrl: './styles-input.component.html',
  styleUrls: ['./styles-input.component.scss']
})
export class StylesInputComponent {
  userInputColor?: string;
  userInputBgColor?: string;
  userInputBordedColor?: string;
  userInputFontSize?: string;
}
