function getAllBooks(): any[] {
  let books = [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JS },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JS },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JS }
  ];

  return books;
}

function logFirstAvailable(books: any[]): void {
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

function getBookTitlesByCategory(category: Category): string[] {
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