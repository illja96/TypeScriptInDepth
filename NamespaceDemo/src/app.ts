import { Utility } from './utility-functions';
import util = Utility.Fees;

// Task 14
console.log('Task 14:');
const maxBooks = Utility.maxBooksAllowed(12);
console.log(`Max books: ${maxBooks}`);
const fees = util.calculateLateFee(612);
console.log(`Fees: ${fees}`);