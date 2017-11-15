import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { KeysPipe } from './keys.pipe';
import { ScriptsComponent } from './scripts/scripts.component';
// Import NgStickyDirective
import { NgStickyModule } from 'ng-sticky';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    KeysPipe,
    ScriptsComponent,
    // NgStickyDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgStickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
