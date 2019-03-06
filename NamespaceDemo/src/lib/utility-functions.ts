export function purge<T>(array: T[]): T[] {
    return array.slice(2, array.length);
}