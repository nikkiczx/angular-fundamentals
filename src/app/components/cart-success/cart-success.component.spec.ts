import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSuccessComponent } from './cart-success.component';

describe('CartSuccessComponent', () => {
  let component: CartSuccessComponent;
  let fixture: ComponentFixture<CartSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
