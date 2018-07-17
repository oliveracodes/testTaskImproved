import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemInfoComponent } from './components/item/item-info/item-info.component';
import { ItemPerformanceComponent } from './components/item/item-performance/item-performance.component';
import { ItemRetentionComponent } from './components/item/item-retention/item-retention.component';
import { ItemScoreComponent } from './components/item/item-score/item-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemInfoComponent,
    ItemPerformanceComponent,
    ItemRetentionComponent,
    ItemScoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
