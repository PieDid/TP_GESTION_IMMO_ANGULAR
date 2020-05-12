import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeContratVenteComponent } from './liste-contrat-vente.component';

describe('ListeContratVenteComponent', () => {
  let component: ListeContratVenteComponent;
  let fixture: ComponentFixture<ListeContratVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeContratVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeContratVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
