import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPerformanceComponent } from './item-performance.component';

describe('ItemPerformanceComponent', () => {
  let component: ItemPerformanceComponent;
  let fixture: ComponentFixture<ItemPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
