
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    price: number;
    title: string;
}

export interface UpdateBooksArgs {
    id: number;
    price: number;
    title: string;
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    bookById(bookId: number): Book | Promise<Book>;
    Login(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    deleteBook(bookId: number): string | Promise<string>;
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(addBookArgs: UpdateBooksArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
