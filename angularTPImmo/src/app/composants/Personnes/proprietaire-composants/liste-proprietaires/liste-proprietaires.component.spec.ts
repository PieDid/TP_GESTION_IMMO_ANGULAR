import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProprietairesComponent } from './liste-proprietaires.component';

describe('ListeProprietairesComponent', () => {
  let component: ListeProprietairesComponent;
  let fixture: ComponentFixture<ListeProprietairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProprietairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProprietairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
