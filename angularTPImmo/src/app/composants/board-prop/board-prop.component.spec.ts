import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPropComponent } from './board-prop.component';

describe('BoardPropComponent', () => {
  let component: BoardPropComponent;
  let fixture: ComponentFixture<BoardPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
