import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministrateurComponent } from './create-administrateur.component';

describe('CreateAdministrateurComponent', () => {
  let component: CreateAdministrateurComponent;
  let fixture: ComponentFixture<CreateAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
