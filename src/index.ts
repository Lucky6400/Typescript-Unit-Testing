export function sum(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function divide(a: number, b: number): number {
    return a / b;
}

export function mult(a: number, b: number): number {
    return a * b;
}

export class Cricketer {
    constructor() { };

    playShot(): string {
        return "Shot Played";
    }
}