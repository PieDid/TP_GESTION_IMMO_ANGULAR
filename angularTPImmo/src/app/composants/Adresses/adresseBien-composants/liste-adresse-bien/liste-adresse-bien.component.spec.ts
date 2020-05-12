import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdresseBienComponent } from './liste-adresse-bien.component';

describe('ListeAdresseBienComponent', () => {
  let component: ListeAdresseBienComponent;
  let fixture: ComponentFixture<ListeAdresseBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAdresseBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdresseBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
