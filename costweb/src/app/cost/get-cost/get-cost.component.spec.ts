import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCostComponent } from './get-cost.component';

describe('GetCostComponent', () => {
  let component: GetCostComponent;
  let fixture: ComponentFixture<GetCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
