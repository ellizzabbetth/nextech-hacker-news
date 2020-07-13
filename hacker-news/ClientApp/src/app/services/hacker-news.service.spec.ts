/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackerNewsService } from './hacker-news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: HackerNews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should ...', inject([HackerNewsService], (service: HackerNewsService) => {
    expect(service).toBeTruthy();
  }));
});
