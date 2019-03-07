import { Librarian } from '../intefaces';
import { sealed, logger, writable, logParameter } from '../decorators';

@sealed
@logger
export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    
    @logParameter()
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}