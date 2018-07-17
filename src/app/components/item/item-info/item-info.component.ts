import { Component, Input } from '@angular/core';

import { IItem } from '../../../models/Item.model';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent {
  // we need input data from this component's container component
  @Input('item') item: IItem;
}
