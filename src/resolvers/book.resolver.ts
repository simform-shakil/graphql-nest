import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { BookService } from 'src/book/book.service';
import { Book } from 'src/schemas/book.schema';
import { Book as BookModel } from '../graphql';
import { AddBookArgs } from 'src/book/args/add.books.args';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], { name: 'books' })
  getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks();
  }

  @Query(() => Book, { name: 'findBookById', nullable: true })
  getBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): BookModel {
    return this.bookService.findBookById(id);
  }

  @Mutation(() => String, { name: 'deleteBook' })
  deleteBook(@Args({ name: 'bookId', type: () => Int }) id: number): string {
    return this.bookService.deleteBook(id);
  }

  @Mutation(() => String, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): string {
    return this.bookService.addBook(addBookArgs);
  }

  @Mutation(() => String, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'bookId', type: () => Int }) id: number,
    @Args('addBookArgs') addBookArgs: AddBookArgs,
  ): string {
    return this.bookService.updateBook(id, addBookArgs);
  }
}
