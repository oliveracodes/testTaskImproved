import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { IItem } from '../../models/Item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('slide', [
        transition(':enter', [
            style({ opacity: 0, height: 0 }),
              // first animate the height
              animate('150ms ease-out', style({ height: '*' })),
              // then set the opacity to 1
              animate('250ms ease-out', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1, height: '*' }),
              // first set the opacity to 0
              animate('150ms ease-in', style({ opacity: 0 })),
              // then animate the height
              animate('100ms ease-in', style({ height: 0 }))
        ])
    ])
  ]
})
export class ItemComponent {
  // we need input data from this component's container component
  @Input('item') item: IItem;
  // isHidden property for the accordion, initally set to true
  isHidden: boolean = true;

  // function that opens the accordion and handles the Like/Unlike button
  handleAccordion(event, item): void {
    // keep the classes of the element that was clicked on
    let classList = event.target.classList;

    if (classList.contains('thumbsUp')) {
      // if classList contains thumbsUp class, set the thumbsUp property to false (Thumbs Down icon)
      item.thumbsUp = false;
    } else if (classList.contains('thumbsDown') || classList.contains('noThumbs')) {
      // if classList contains thumbsDown class or noThumbs class (if not set in data-base), then set the thumbsUp property to true (Thumbs Up icon)
      item.thumbsUp = true;
    } else {
      // otherwise, set the isHidden property to false (open the accordion)
      this.isHidden = false;
    }
  }

  // function that closes the accordion
  showLess(): void {
    // set the isHidden property to true (close the accordion)
    this.isHidden = true;
  }
}
