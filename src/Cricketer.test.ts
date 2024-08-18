import { Cricketer } from "./Cricketer";

let cricketer: Cricketer | undefined;

beforeEach(() => {
    cricketer = new Cricketer("Rahul Dravid", "Right Handed Batsman", false);
})

describe('testing the cricketer behavior', () => {

    test("Should print the name correctly", () => {
        expect(cricketer?.getName).toBe("Rahul Dravid");
    })

})

afterEach(() => {
    cricketer = undefined;
})