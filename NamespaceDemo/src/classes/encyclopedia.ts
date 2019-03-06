import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    edition: number;

    constructor(newEdition: number, newTitle: string, newYear: number) {
        super(newTitle, newYear);

        this.edition = newEdition;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}