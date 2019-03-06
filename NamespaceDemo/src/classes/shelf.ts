import { ShelfItem } from '../intefaces';

export default class Shelf<T extends ShelfItem> {
    private _items: T[];

    constructor() {
        this._items = new Array<T>();
    }

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    find(title: string): T {
        return this._items.find((x) => x.title === title);
    }

    printTitles(): void {
        for (const item of this._items) {
            console.log(item.title);
        }
    }
}