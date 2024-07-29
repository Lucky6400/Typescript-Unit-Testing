import { printMarks } from "./moduleMock";

const mockImpl = jest.fn(() => console.log("More marks"));

describe("moduleMock", () => {
    test("logs the info", () => {
        printMarks(40, mockImpl);

        expect(mockImpl.mock.calls).toHaveLength(1);
    });

    test("does not log the info", () => {
        printMarks(60, mockImpl);

        expect(mockImpl.mock.calls).toHaveLength(2);
    });
})