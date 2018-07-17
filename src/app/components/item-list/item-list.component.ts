import { Component, OnInit } from '@angular/core';

import { IItem } from '../../models/Item.model';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: IItem[] = [];
  errorMessage: string;
  isLoading: boolean = false;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.loadingStateChanged
      .subscribe(isItLoading => {
        // switch the isLoading property to the new state of loading
        this.isLoading = isItLoading;
      });

    this.fetchItems();
  }

  fetchItems() {
    this.dataService.getItems()
      .subscribe(
        // if OK, in the items property store the items that we get from the Observable
        // and set the loadingStateChanged to false to indicate that we finished loading
        (items: IItem[]) => {
          // please comment out the following two lines and uncomment the setInterval() function below them, if you want to see the Loading bar
          this.items = items;
          this.dataService.loadingStateChanged.next(false);

          // FOR TESTING PURPOSES ONLY:
          // the timer's purpose is to give us some server-to-client-delay so we can see the Loading bar showing in the UI
          // setInterval(() => {
          //   this.items = items;
          //   this.dataService.loadingStateChanged.next(false);
          // }, 3000);
        },
        // otherwise, in the errorMessage property store the error
        // and set the loadingStateChanged to false to indicate that we finished loading because even though we did fail we were still successful in submitting that request
        error => {
          this.errorMessage = <any>error;
          this.dataService.loadingStateChanged.next(false);
        }
      );
  }

}
