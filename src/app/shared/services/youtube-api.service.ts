import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData<T>(): Observable<any | T> {
    return this.http.get(this.apiUrl);
  }
}
