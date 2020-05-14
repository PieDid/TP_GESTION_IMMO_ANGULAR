import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVisitesComponent } from './liste-visites.component';

describe('ListeVisitesComponent', () => {
  let component: ListeVisitesComponent;
  let fixture: ComponentFixture<ListeVisitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVisitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
