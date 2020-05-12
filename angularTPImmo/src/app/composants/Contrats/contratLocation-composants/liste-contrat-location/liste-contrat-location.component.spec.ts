import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeContratLocationComponent } from './liste-contrat-location.component';

describe('ListeContratLocationComponent', () => {
  let component: ListeContratLocationComponent;
  let fixture: ComponentFixture<ListeContratLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeContratLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeContratLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
