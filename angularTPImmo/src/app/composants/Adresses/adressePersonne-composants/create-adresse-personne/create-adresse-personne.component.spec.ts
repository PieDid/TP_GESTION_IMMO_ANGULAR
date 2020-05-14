import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdressePersonneComponent } from './create-adresse-personne.component';

describe('CreateAdressePersonneComponent', () => {
  let component: CreateAdressePersonneComponent;
  let fixture: ComponentFixture<CreateAdressePersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdressePersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdressePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
