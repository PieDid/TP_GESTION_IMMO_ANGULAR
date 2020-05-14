import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLocComponent } from './board-loc.component';

describe('BoardLocComponent', () => {
  let component: BoardLocComponent;
  let fixture: ComponentFixture<BoardLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
