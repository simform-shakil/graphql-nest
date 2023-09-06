import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './args/add.books.args';
import { UpdateBooksArgs } from './args/update.books.args';

@Injectable()
export class BookService {
  public bookData: BookEntity[] = [];
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,
  ) {}

  async addBook(bookData: AddBookArgs): Promise<string> {
    const book: BookEntity = new BookEntity();
    book.price = bookData.price;
    book.title = bookData.title;
    await this.bookRepo.save(book);
    return 'Book Added successfully';
  }

  async updateBook(UpdateBooksArgs: UpdateBooksArgs): Promise<string> {
    const book = await this.bookRepo.findOne({
      where: { id: UpdateBooksArgs.id },
    });

    book.price = UpdateBooksArgs.price;
    book.title = UpdateBooksArgs.title;
    await this.bookRepo.save(book);
    return 'Book Updated successfully';
  }

  async deleteBook(id: number): Promise<string> {
    await this.bookRepo.delete(id);
    return 'Book deleted successfully';
  }

  async findBookById(id: number): Promise<BookEntity> {
    const book = await this.bookRepo.findOne({ where: { id } });
    return book;
  }

  async findAllBooks(): Promise<BookEntity[]> {
    const books = await this.bookRepo.find();
    return books;
  }
}
