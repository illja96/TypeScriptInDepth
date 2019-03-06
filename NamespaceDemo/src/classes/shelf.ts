export default class Shelf<T> {
    private _items: T[];

    add(item: T): void {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }

    constructor() {
        this._items = new Array<T>();
    }
}