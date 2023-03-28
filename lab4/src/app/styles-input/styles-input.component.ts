import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-styles-input',
  templateUrl: './styles-input.component.html',
  styleUrls: ['./styles-input.component.scss']
})
export class StylesInputComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
    
  }
}
