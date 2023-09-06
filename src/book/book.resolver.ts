import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/schemas/book.schema';
import { BookService } from './book.service';
import { AddBookArgs } from './args/add.books.args';
import { UpdateBooksArgs } from './args/update.books.args';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], { name: 'books' })
  getAllBooks() {
    return this.bookService.findAllBooks();
  }

  @Query(() => Book, { name: 'bookById' })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }

  @Mutation(() => String, { name: 'deleteBook' })
  deleteBook(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.deleteBook(id);
  }

  @Mutation(() => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs) {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation(() => String, { name: 'updateBook' })
  updateBook(@Args('addBookArgs') updateBookArgs: UpdateBooksArgs) {
    return this.bookService.updateBook(updateBookArgs);
  }
}
