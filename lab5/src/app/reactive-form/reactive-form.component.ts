import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      customerName: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)
      }),
      shippingAddress: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}-\d{3}$/)])
      }),
      paymentMethod: new FormControl('', Validators.required),
      items: this.fb.array([])
    });
  }

  get items() {
    return this.orderForm.get('items') as FormArray;
  }
  addItem() {
    this.items.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    }));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      this.orderForm.reset();
    }
  }

}
