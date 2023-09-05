import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public bookData: BookEntity[] = [];
  constructor() {
    this.bookData = [
      {
        id: 1,
        price: 500,
        title: 'The war',
      },
    ];
  }

  addBook(bookData: BookEntity) {
    this.bookData.push(bookData);
    return 'Book Added successfully';
  }

  updateBook(id: number, updatedBook: BookEntity): string {
    for (let i = 0; i < this.bookData.length; i++) {
      if (this.bookData[i].id === id) {
        this.bookData[i] = updatedBook;
        break;
      }
    }
    return 'Book Updated successfully';
  }

  deleteBook(id: number) {
    this.bookData = this.bookData.filter((book: BookEntity) => book.id !== id);
    return 'Book deleted successfully';
  }

  findBookById(id: number) {
    return this.bookData.find((book) => book.id === id);
  }

  findAllBooks() {
    return this.bookData;
  }
}
