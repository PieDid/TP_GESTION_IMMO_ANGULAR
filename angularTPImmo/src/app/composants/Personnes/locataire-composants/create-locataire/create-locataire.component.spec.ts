import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocataireComponent } from './create-locataire.component';

describe('CreateLocataireComponent', () => {
  let component: CreateLocataireComponent;
  let fixture: ComponentFixture<CreateLocataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
