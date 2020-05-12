import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosAgencesComponent } from './nos-agences.component';

describe('NosAgencesComponent', () => {
  let component: NosAgencesComponent;
  let fixture: ComponentFixture<NosAgencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosAgencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosAgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
