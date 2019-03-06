export function sealed(constructor: Function): void {
    console.log('Sealing the constructor');

    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function logger(constructor: Function) {
    const originalContructor: Function = constructor;

    const newContructor: any = function (...args) {
        console.log(`Creating new instance of ${originalContructor.name}`);
        this.age = 30;
        this.printLabrarian = () => {
            console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
        };
    }

    newContructor.prototype = originalContructor.prototype;

    return newContructor;
}