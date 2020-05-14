import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppartementComponent } from './create-appartement.component';

describe('CreateApartementComponent', () => {
  let component: CreateAppartementComponent;
  let fixture: ComponentFixture<CreateAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
