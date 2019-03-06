const books = getAllBooks();
logFirstAvailable(books);

function getAllBooks(): any[] {
  let books = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
  ];

  return books;
}

function logFirstAvailable(books: any[]): void {
  console.log(`Books count: ${books.length}`);

  for (let book of books) {
    if (!book.available) {
      continue;
    }

    console.log(`First available book name: ${book.title}`);
    break;
  }
}
