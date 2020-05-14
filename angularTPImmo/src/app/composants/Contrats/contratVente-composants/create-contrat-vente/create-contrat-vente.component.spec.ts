import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContratVenteComponent } from './create-contrat-vente.component';

describe('CreateContratVenteComponent', () => {
  let component: CreateContratVenteComponent;
  let fixture: ComponentFixture<CreateContratVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContratVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContratVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
