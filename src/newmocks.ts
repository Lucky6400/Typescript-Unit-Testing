export function runCar(speed: number, cb: () => number): string {
    if(cb() === 0) return `${speed} is not enough.`;

    return `${speed} is awesome`;
}