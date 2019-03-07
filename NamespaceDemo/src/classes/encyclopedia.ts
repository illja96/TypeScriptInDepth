import { ReferenceItem } from './reference-item';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    edition: number;

    @positiveInteger()
    private _copies: number;

    constructor(newEdition: number, newTitle: string, newYear: number) {
        super(newTitle, newYear);

        this.edition = newEdition;
    }

    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}