import { Component, Input } from '@angular/core';

import { IItem } from '../../../models/Item.model';

@Component({
  selector: 'app-item-score',
  templateUrl: './item-score.component.html',
  styleUrls: ['./item-score.component.css']
})
export class ItemScoreComponent {
  // we need input data from this component's container component
  @Input('item') item: IItem;
}
