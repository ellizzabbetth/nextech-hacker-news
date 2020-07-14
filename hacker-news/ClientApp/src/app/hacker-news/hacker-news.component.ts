import { Component, OnInit, ViewChild } from '@angular/core';

import { HackerNewsService } from '../services/hacker-news.service';
import { IStory } from '../models/IStory';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})

export class HackerNewsComponent implements OnInit {

  constructor(private hackerNewsService: HackerNewsService) { }

  dataSource =  new MatTableDataSource<IStory>();
  displayedColumns: string[] = ['title'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
   this.loadStories();
  }

  loadStories() {
    this.hackerNewsService.getNewStories().subscribe(
      result => {
         this.dataSource =  new MatTableDataSource(result);
         this.dataSource.paginator = this.paginator;
      },
      error => console.error(error)
    );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
   this.dataSource.filter = this.searchKey.toString().trim().toLowerCase();
  }

  open(url: string) {
    if (url === '') {
      url = 'http://www.google.com';
    }
    window.open(url, '_blank');
  }

}
