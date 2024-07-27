import { Cricketer, divide, mult, printName, subtract, sum } from "."

let cricketer: Cricketer;

beforeAll(() => { //setup
    console.log("before each one");
    cricketer = new Cricketer(); // instantiating before running the test cases
})

describe('testing the calculative functions', () => { // test suite

    // all the test cases
    test('adds the numbers', () => {
        expect(sum(10, 45)).toBe(55); // assertion
    })

    test('subtracts the numbers', () => {
        expect(subtract(10, 4)).toBe(6);
    })

    test('divides the numbers', () => {
        expect(divide(10, 2)).toBe(5);
    })

    test('multiplies the numbers', () => {
        expect(mult(10, 45)).toBe(450);
    })
});

describe('testing the methods inside the classes', () => {

    test('plays the shot', () => {
        expect(cricketer.playShot()).toBe("Shot Played");
    })
})

describe('testing the asyncronous code', () => {

    // without async and await
    test('prints the name', () => {
        printName().then(res => {
            expect(res).toBe("lucky");
        })
    })

    // with async and await
    test('prints the name async/await', async () => {
        const res = await printName();
        expect(res).toBe("lucky")
    })
})

afterAll(() => console.log("after each test")); // teardown
