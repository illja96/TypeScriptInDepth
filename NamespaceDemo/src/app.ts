import { Utility } from './utility-functions';
import util = Utility.Fees;
import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './intefaces';
import { RefBook, ReferenceItem, UniversityLibrarian, Shelf } from './classes/index';
import { purge, getAllBooks, getBookTitlesByCategory, logFirstAvailable, getBookById, logBookTitles, createCustomerId, createCustomer, сheckoutBooks, getTitles, printBook, DamageLoggerImplementation, getBooksByCategory, logCategorySearch } from './lib/utility-functions';
import Encyclopedia from './classes/encyclopedia';

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

// Task 7
console.log('Task 7:');
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
}
printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 8
console.log('Task 8:')
const logDamage: Logger = DamageLoggerImplementation;
logDamage('missing back cover');

// Task 9
console.log('Task 9:');
let favoriteAuthor: Author = {
    'name': 'Author',
    'email': 'author@email.com',
    'numBooksPublished': 0
};
let favoriteLibrarian: Librarian = {
    'name': 'Librarian',
    'email': 'librarian@email.com',
    'department': 'Library',
    'assistCustomer': (custName: string) => { }
};

// Task 10
console.log('Task 10:');
favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Librarian';
favoriteLibrarian.assistCustomer('Ann');

// Task 11
console.log('Task 11:');
/*
const ref = new ReferenceItem('ReferenceItem', 2019);
ref.printItem();
ref.publisher = 'ReferenceItem publisher';
console.log(ref.publisher);
*/

// Task 12
console.log('Task 12:');
const refBook = new RefBook(1, 'Encyclopedia', 2019);
refBook.printItem();

// Task 13
console.log('Task 13:');
refBook.printCitation();

// Task 14
console.log('Task 14:');
const maxBooks = Utility.maxBooksAllowed(12);
console.log(`Max books: ${maxBooks}`);
const fees = util.calculateLateFee(612);
console.log(`Fees: ${fees}`);

// Task 18
console.log('Task 18:');
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
const purgedInventory = purge(inventory);
console.log(purgedInventory);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const purgedNumbers = purge(numbers);
console.log(purgedNumbers);

// Task 19
console.log('Task 19:');
const bookShelf = new Shelf<Book>();
inventory.forEach((x) => bookShelf.add(x));
const firstBookInShelf = bookShelf.getFirst();
console.log(firstBookInShelf);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf = new Shelf<Magazine>();
magazines.forEach((x) => magazineShelf.add(x));
const firstMagazoneInShelf = magazineShelf.getFirst();
console.log(firstMagazoneInShelf);

// Task 20
console.log('Task 20:');
magazineShelf.printTitles();
const findedMagazine = magazineShelf.find('Five Points');
console.log(findedMagazine);

// Task 22
console.log('Task 22:');
const fLibrarian = new UniversityLibrarian();
fLibrarian.name = 'Anna';
(<any>fLibrarian).printLabrarian();

// Task 23
console.log('Task 23:');
try {
    const writableLibrarian = new UniversityLibrarian();
    writableLibrarian.assistFaculty = () => console.log('Changed assistFaculty');
    writableLibrarian.assistFaculty();
    writableLibrarian.teachCommunity = () => console.log('Changed teachCommunity');
    writableLibrarian.teachCommunity();
}
catch (exeption) {
    console.log(exeption);
}

// Task 24
console.log('Task 24:');
const timeoutEncyclopedia = new RefBook(1, 'RefBook', 2019);
timeoutEncyclopedia.printItem();

// Task 25
console.log('Task 25:');
const logUniversityLabrarian = new UniversityLibrarian();
logUniversityLabrarian.name = 'Log labrarian';
logUniversityLabrarian.assistCustomer('Ann');

// Task 26
console.log('Task 26:');
const formatUniversityLabrarian = new UniversityLibrarian();
formatUniversityLabrarian.name = 'Format labrarian';
const formatUniversityLabrarianName = formatUniversityLabrarian.name;
console.log(formatUniversityLabrarianName);

// Task 27
console.log('Task 27:');
const copiesEncyclopedia = new Encyclopedia(1, 'PositiveEncyclopedia', 2019);
try {
    copiesEncyclopedia.copies = 10;
    copiesEncyclopedia.copies = 0;
    copiesEncyclopedia.copies = 4;
    copiesEncyclopedia.copies = 5;
} catch (exeption) {
    console.log(exeption);
}
console.log(copiesEncyclopedia);

// Task 28
console.log('Task 28:');
getBooksByCategory(Category.JS, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);