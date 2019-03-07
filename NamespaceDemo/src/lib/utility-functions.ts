import { Book, LibMgrCallback } from '../intefaces';
import { Category } from '../enums';

export function purge<T>(array: T[]): T[] {
    return array.slice(2, array.length);
}

export function getAllBooks(): Book[] {
    const books: Book[] = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JS },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JS },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JS }
    ];

    return books;
}

export function logFirstAvailable(books: any[] = getAllBooks()): void {
    console.log(`Books count: ${books.length}`);

    for (const book of books) {
        if (!book.available) {
            continue;
        }

        console.log(`First available book name: ${book.title}`);
        break;
    }
}

export function getBookTitlesByCategory(category: Category = Category.JS): string[] {
    const books = getAllBooks();
    const booksInCategory = new Array<string>();

    for (const book of books) {
        if (book.category != category) {
            continue;
        }

        booksInCategory.push(book.title);
    }

    return booksInCategory;
}

export function logBookTitles(bookTitles: string[]): void {
    console.log(bookTitles);
}

export function getBookById(id: number): Book {
    const books = getAllBooks();
    const book = books.find((x) => x.id == id);

    return book;
}

export function createCustomerId(id: number, name: string): string {
    return `${id} ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`${name} ${age ? age : ''} ${city ? city : ''}`);
}

export function сheckoutBooks(customer: string, bookIds: number[]): string[] {
    const avaliableBooks = new Array<string>();

    for (const bookId of bookIds) {
        const book = getBookById(bookId);
        if (!book.available) {
            continue;
        }

        avaliableBooks.push(book.title);
    }

    return avaliableBooks;
}

export function getTitles(authorOrAvaliable: string | boolean): string[] {
    const bookTitles = new Array<string>();

    const books = getAllBooks();
    for (const book of books) {
        if (typeof authorOrAvaliable === 'string' && book.title === authorOrAvaliable) {
            bookTitles.push(book.title);
        }

        if (typeof authorOrAvaliable === 'boolean' && book.available == authorOrAvaliable) {
            bookTitles.push(book.title);
        }
    }

    return bookTitles;
}

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export function DamageLoggerImplementation(reason: string): void {
    console.log(`Damaged: ${reason}`)
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const bookTitlesByCategory = getBookTitlesByCategory(category);
            if (bookTitlesByCategory.length == 0) {
                throw new Error('No books found.');
            }

            callback(null, bookTitlesByCategory);
        } catch (exception) {
            callback(exception, null);
        }
    }, 2000);
}

export function logCategorySearch(category: Category, titles: string[]): void {
    const error = category as any as Error;
    if (error) {
        console.log(error.message);
    } else {
        logBookTitles(titles);
    }
}