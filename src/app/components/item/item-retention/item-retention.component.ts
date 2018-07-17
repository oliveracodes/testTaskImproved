import { Component, Input } from '@angular/core';

import { IItem } from '../../../models/Item.model';

@Component({
  selector: 'app-item-retention',
  templateUrl: './item-retention.component.html',
  styleUrls: ['./item-retention.component.css']
})
export class ItemRetentionComponent {
  // we need input data from this component's container component
  @Input('item') item: IItem;
}
