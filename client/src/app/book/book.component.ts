import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[];

  constructor(
    private booksService: BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks(): void {
    this.booksService.getBooks()
      .subscribe(books => this.books = books);
  }

}
