import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdressePersonneComponent } from './liste-adresse-personne.component';

describe('ListeAdressePersonneComponent', () => {
  let component: ListeAdressePersonneComponent;
  let fixture: ComponentFixture<ListeAdressePersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAdressePersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdressePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
