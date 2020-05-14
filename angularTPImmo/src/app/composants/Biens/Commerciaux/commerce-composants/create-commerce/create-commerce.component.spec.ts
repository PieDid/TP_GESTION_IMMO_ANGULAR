import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommerceComponent } from './create-commerce.component';

describe('CommerceComponent', () => {
  let component: CreateCommerceComponent;
  let fixture: ComponentFixture<CreateCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
