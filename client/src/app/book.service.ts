import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = 'http://localhost:3000/books';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookUrl);
  }
}
