import { timer } from "./timerMocks";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('testing my timer', () => {
    timer(() => console.log("Inserted the callback"));

    expect(setTimeout).toHaveBeenCalledTimes(1);
})