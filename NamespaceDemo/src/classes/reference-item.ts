import { timeout } from "../decorators";

export abstract class ReferenceItem {
    /*
    title: string;
    year: number;
    */

    static department: string = 'Department';

    private _publisher: string;
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    /*
    constructor(newTitle: string, newYear: number) {
      console.log('Creating a new ReferenceItem...');
      this.title = newTitle;
      this.year = newYear;
    }
    */

    constructor(public title: string, protected year: number) { }

    @timeout(1000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}