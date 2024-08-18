import { add, multiply } from ".";

beforeAll(() => {
    console.log("Before all")
})

beforeEach(() => {
    console.log("beforeEach is running");
})


describe("testing the math operations", () => {
    test("adds the numbers", () => {

        expect(add(1, 2)).toBe(3);
    })

    test("multiplies the numbers", () => {

        expect(multiply(3, 4)).toBe(12);
    })
});


afterEach(() => {
    console.log("After each")
})

afterAll(() => {
    console.log("After all")
})