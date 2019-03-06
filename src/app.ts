function getAllBooks(): any[] {
  let books = [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JS },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JS },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JS }
  ];

  return books;
}

function logFirstAvailable(books: any[] = getAllBooks()): void {
  console.log(`Books count: ${books.length}`);

  for (const book of books) {
    if (!book.available) {
      continue;
    }

    console.log(`First available book name: ${book.title}`);
    break;
  }
}

enum Category {
  JS,
  CSS,
  HTML,
  TS,
  Angular
}

function getBookTitlesByCategory(category: Category = Category.JS): string[] {
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

function logBookTitles(bookTitles: string[]): void {
  console.log(bookTitles);
}

function getBookById(id: number): any {
  const books = getAllBooks();
  const book = books.find((x) => x.id == id);

  return book;
}

function createCustomerId(id: number, name: string): string {
  return `${id} ${name}`;
}

function createCustomer(name: string, age?: number, city?: string) {
  console.log(`${name} ${age ? age : ''} ${city ? city : ''}`);
}

function сheckoutBooks(customer: string, bookIds: number[]): string[] {
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

function getTitles(authorOrAvaliable: string | boolean): string[] {
  const bookTitles = new Array<string>();

  const books = getAllBooks();
  for (const book of books) {
    if (typeof authorOrAvaliable === 'string' &&
      book.title === authorOrAvaliable) {
      books.push(book.title);
    }

    if (typeof authorOrAvaliable === 'boolean' &&
      book.available == authorOrAvaliable) {
      bookTitles.push(book.title);
    }
  }

  return bookTitles;
}

// Task 1
console.log('Task 1:');
const books = getAllBooks();
logFirstAvailable(books);

// Task 2
console.log('Task 2:');
const booksCategory = getBookTitlesByCategory(Category.JS);
logBookTitles(booksCategory);

// Task 3
console.log('Task 3:');
books.forEach((x) => console.log(x.title));
const bookById = getBookById(3);
console.log(bookById);

// Taks 4
console.log('Task 4:');
const customer1 = createCustomerId(10, 'Ann');
console.log(customer1);
let idGenerator = (id: number, name: string) => `${id} ${name}`;
idGenerator = createCustomerId;
const customer2 = idGenerator(11, 'Anna');
console.log(customer2);

// Task 5
console.log('Task 5:');
createCustomer('Ann1');
createCustomer('Ann2', 18);
createCustomer('Ann3', 18, 'Kharkiv');
const booksDefaultCategory = getBookTitlesByCategory();
logBookTitles(booksDefaultCategory);
logFirstAvailable();
const myBooks = сheckoutBooks('Ann', [1, 2, 4]);
myBooks.forEach((x) => console.log(x));

// Task 6
console.log('Task 6:');
const checkedOutBooks = getTitles(false);
checkedOutBooks.forEach((x) => console.log(x));