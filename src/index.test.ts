import { add, multiply } from ".";

describe("tdd starts", () => {
    test("add the numbers", () => {
        expect(add(1, 2)).toBe(3);
    })

    test("multiplies the numbers", () => {
        expect(multiply(3, 4)).toBe(12);
    })
});
