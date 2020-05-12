import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEntrepotsComponent } from './liste-entrepots.component';

describe('ListeEntrepotsComponent', () => {
  let component: ListeEntrepotsComponent;
  let fixture: ComponentFixture<ListeEntrepotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEntrepotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEntrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
