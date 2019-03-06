function getAllBooks(): any[] {
  let books = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JS },
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JS },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JS }
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

const books = getAllBooks();
logFirstAvailable(books);
const booksCategory = getBookTitlesByCategory(Category.JS);
logBookTitles(booksCategory);