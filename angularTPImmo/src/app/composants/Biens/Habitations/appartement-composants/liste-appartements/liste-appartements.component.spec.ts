import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppartementsComponent } from './liste-appartements.component';

describe('ListeAppartementsComponent', () => {
  let component: ListeAppartementsComponent;
  let fixture: ComponentFixture<ListeAppartementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppartementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
