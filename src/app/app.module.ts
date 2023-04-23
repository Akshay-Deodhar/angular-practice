import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { PeopleViewListComponent } from './people-view-list/people-view-list.component';
import { PeopleViewGridComponent } from './people-view-grid/people-view-grid.component';
import { PeopleViewTableComponent } from './people-view-table/people-view-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PeopleComponent,
    PeopleViewListComponent,
    PeopleViewGridComponent,
    PeopleViewTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
