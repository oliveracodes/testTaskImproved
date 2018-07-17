import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IItem } from '../models/Item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // boolean to indicate whether loading has started or finished
  loadingStateChanged = new Subject<boolean>();

  // path to our database
  private itemsUrl = 'api/items/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<IItem[]> {
    // setting the loadingStateChanged to true to indicate that we started loading
    this.loadingStateChanged.next(true);

    return this.http.get<IItem[]>(this.itemsUrl)
      .pipe(
        // if OK, logging the data to the console
        tap(data => console.log('Data fetched successfully! ' + JSON.stringify(data))),
        // otherwise, call the handleError() method
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${err.status}. Error message is: ${err.message}.`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
