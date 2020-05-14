import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaisonComponent } from './create-maison.component';

describe('CreateMaisonComponent', () => {
  let component: CreateMaisonComponent;
  let fixture: ComponentFixture<CreateMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
