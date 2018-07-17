import { Component, Input } from '@angular/core';

import { IItem } from '../../../models/Item.model';

@Component({
  selector: 'app-item-performance',
  templateUrl: './item-performance.component.html',
  styleUrls: ['./item-performance.component.css']
})
export class ItemPerformanceComponent {
  // we need input data from this component's container component
  @Input('item') item: IItem;
}
