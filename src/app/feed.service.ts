import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Feedback } from './feed'

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/'
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  };

  getFeedback(): Observable<Feedback> {
    return this.http.get<Feedback>(this.getUrl)
  }

}
