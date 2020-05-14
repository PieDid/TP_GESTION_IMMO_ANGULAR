import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdresseBienComponent } from './create-adresse-bien.component';

describe('CreateAdresseBienComponent', () => {
  let component: CreateAdresseBienComponent;
  let fixture: ComponentFixture<CreateAdresseBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdresseBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdresseBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
