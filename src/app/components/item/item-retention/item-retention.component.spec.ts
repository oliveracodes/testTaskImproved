import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRetentionComponent } from './item-retention.component';

describe('ItemRetentionComponent', () => {
  let component: ItemRetentionComponent;
  let fixture: ComponentFixture<ItemRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRetentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
