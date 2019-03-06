import { Librarian } from '../intefaces';
import { sealed, logger } from '../decorators';

@sealed
@logger
export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}