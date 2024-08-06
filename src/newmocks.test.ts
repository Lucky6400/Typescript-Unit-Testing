import { runCar } from "./newmocks";

const mockCB = jest.fn();

describe('testing more mocks', () => {

    // mocking return values
    test('mocks the return value 0 of runCar callback', () => {
        mockCB.mockReturnValueOnce(0);

        expect(runCar(230, mockCB)).toBe('230 is not enough.')
    })

    test('mocks the return value other than 0 of runCar callback', () => {
        mockCB.mockReturnValueOnce(2);

        expect(runCar(230, mockCB)).toBe('230 is awesome')
    })

    // mocking the modules

    // check api.ts and api.test.ts

    // mocking names

    test('mocks the return value other than 0 of runCar callback', () => {
        mockCB.mockReturnValueOnce(2).mockName('myCallback');

        expect(mockCB.getMockName()).toBe('myCallback')
    })
})