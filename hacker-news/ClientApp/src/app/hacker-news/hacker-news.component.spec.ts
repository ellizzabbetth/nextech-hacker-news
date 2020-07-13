/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement, inject } from '@angular/core';

import { HackerNewsComponent } from './hacker-news.component';
import { HackerNewsService } from '../services/hacker-news.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatButtonModule, MatPaginatorModule, MatTableModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HackerNewsComponent', () => {
  let component: HackerNewsComponent;
  let fixture: ComponentFixture<HackerNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerNewsComponent ],
      imports: [ FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule, BrowserAnimationsModule,
        MatPaginatorModule,   MatInputModule,
        MatButtonModule, HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
