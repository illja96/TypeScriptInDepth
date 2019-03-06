export namespace Utility {
    export function maxBooksAllowed(age: number) {
        return age < 12 ? 3 : 10;
    }    
}

export namespace Utility.Fees {
    export function calculateLateFee(daysLate: number): number {
        return daysLate * 0.25;
    }
}

function privateFunc() {
    console.log('This is private');
}