import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesInputComponent } from './styles-input.component';

describe('StylesInputComponent', () => {
  let component: StylesInputComponent;
  let fixture: ComponentFixture<StylesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
