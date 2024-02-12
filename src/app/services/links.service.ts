import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Link } from '../model/link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LinksService {

  constructor(private http: HttpClient) { }

  loadAllLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('assets/links.json');
  }
}
