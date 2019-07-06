import { Injectable } from '@nestjs/common';
import { Book, BookStatus } from './book.model';

@Injectable()
export class BooksService {

   private MockBooks: Book[] = [
        { id: 1, title: 'ESV Study Bible', description: 'The Bible ...', status: BookStatus.CHECKED_IN },
        { id: 2, title: 'Paul: Journeys of Adventure', description: '', status: BookStatus.CHECKED_IN },
        { id: 3, title: 'Developing a healthy prayer life', description: '', status: BookStatus.CHECKED_IN },
      ];

    private books: Book[] = this.MockBooks;

    getAllBooks(): Book[] {
        return this.books;
    }
}
