export function sealed(constructor: Function) {
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

export function writable(isWritable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = isWritable;
    };
}

export function timeout(millis: number): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function Timeout(...args) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, millis);
        };

        return descriptor;
    };
}

export function logParameter() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function Timeout(...args) {
            for (let i = 0; i < args.length; i++) {
                console.log(`Method: ${originalMethod.name}, ParamIndex: ${i}, ParamValue: ${args[i]}`);
            }

            originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

export function format(pref: string = 'Mr./Mrs.') {
    return function (target: any, propertyKey: string) {
        makeProperty(target, propertyKey, value => `${pref} ${value}`, value => value);
    };
}

function makeProperty<T>(prototype: any, propertyName: string, getTransformer: (value: any) => T, setTransformer: (value: any) => T) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}  