import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTerrainComponent } from './create-terrain.component';

describe('TerrainComponent', () => {
  let component: CreateTerrainComponent;
  let fixture: ComponentFixture<CreateTerrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTerrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
