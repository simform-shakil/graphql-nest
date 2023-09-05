import { Module } from '@nestjs/common';
import { BookResolver } from 'src/resolvers/book.resolver';
import { BookService } from './book.service';

@Module({
  imports: [],
  providers: [BookResolver, BookService],
  controllers: [],
})
export class BookModule {}
