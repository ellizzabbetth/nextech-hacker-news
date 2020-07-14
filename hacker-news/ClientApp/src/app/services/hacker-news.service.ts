import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IStory } from '../models/IStory';

@Injectable({
  providedIn: 'root'
})


export class HackerNewsService {
  baseUrl = environment.apiUrl;
  baseHackerUrl = this.baseUrl + 'hackernews';


  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getNewStories(): Observable<IStory[]> {
      return this.http
      .get(this.baseHackerUrl)
          .pipe(
              map((data: IStory[]) => {
                const res = Object.entries(data).map(([id, prop]) => ({id, ...prop}));
                return res;
              }),
              catchError(this.handleError)
          );
  }



  private handleError(error: HttpErrorResponse) {
      console.error('Server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
     return Observable.throw(error || 'Server error');
  }
}
