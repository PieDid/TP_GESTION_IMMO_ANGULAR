import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContratLocationComponent } from './create-contrat-location.component';

describe('CreateContratLocationComponent', () => {
  let component: CreateContratLocationComponent;
  let fixture: ComponentFixture<CreateContratLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContratLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContratLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
