import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBureauComponent } from './create-bureau.component';

describe('BureauComponent', () => {
  let component: CreateBureauComponent;
  let fixture: ComponentFixture<CreateBureauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBureauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
