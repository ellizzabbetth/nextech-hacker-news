import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HackerNewsService } from './services/hacker-news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatIconModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      HackerNewsComponent,
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'hacker-news', component: HackerNewsComponent},
      ]),
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatButtonModule
    ],
    providers: [HackerNewsService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
