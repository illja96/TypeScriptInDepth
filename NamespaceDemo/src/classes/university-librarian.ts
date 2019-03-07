import { Librarian } from '../intefaces';
import { sealed, logger, writable, logParameter, format } from '../decorators';

@sealed
@logger
export class UniversityLibrarian implements Librarian {
    @format()
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