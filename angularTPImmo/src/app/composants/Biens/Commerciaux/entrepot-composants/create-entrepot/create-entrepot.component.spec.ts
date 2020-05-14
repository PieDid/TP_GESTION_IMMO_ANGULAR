import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrepotComponent } from './create-entrepot.component';

describe('EntrepotComponent', () => {
  let component: CreateEntrepotComponent;
  let fixture: ComponentFixture<CreateEntrepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEntrepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
