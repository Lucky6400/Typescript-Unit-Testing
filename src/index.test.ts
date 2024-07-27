import { divide, mult, subtract, sum } from "."

beforeAll(() => { //setup
    console.log("before each one");
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
})


afterAll(() => console.log("after each test")); // teardown
