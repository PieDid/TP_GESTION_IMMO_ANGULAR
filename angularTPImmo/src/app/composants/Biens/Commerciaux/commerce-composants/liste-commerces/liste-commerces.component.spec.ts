import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommercesComponent } from './liste-commerces.component';

describe('ListeCommercesComponent', () => {
  let component: ListeCommercesComponent;
  let fixture: ComponentFixture<ListeCommercesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommercesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommercesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
