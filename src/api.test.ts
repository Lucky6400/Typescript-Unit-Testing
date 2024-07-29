import axios from "axios";
import { fetchData } from "./api";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('testing the api with jest and mock', () => {
    test('should return data from API', async () => {
        const data = { data: 'response data' };
        mockedAxios.get.mockResolvedValue({ data });

        const result = await fetchData('https://test.dev');
        expect(result).toEqual(data);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://test.dev');
    });

    test('should handle generic error from API', async () => {
        mockedAxios.get.mockResolvedValue(new Error('Generic Error'));

        try {
            await fetchData('https://test.dev');
        } catch (error) {
            expect((error as Error).message).toBe('Generic Error');
        }
    });

    test('handles the unknown error', async () => {
        mockedAxios.get.mockResolvedValue('Some unknown error');

        try {
            await fetchData('https://test.dev')
        } catch (error) {
            expect((error as Error).message).toBe('An unknown error occurred')
        }
    })
})