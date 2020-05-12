import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBureauxComponent } from './liste-bureaux.component';

describe('ListeBureauxComponent', () => {
  let component: ListeBureauxComponent;
  let fixture: ComponentFixture<ListeBureauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBureauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
