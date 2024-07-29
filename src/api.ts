import axios from "axios"

export const fetchData = async (url: string) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error: unknown) {
        if(axios.isAxiosError(error)) {
            throw new Error(error.message)
        } else if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("An unknown error occurred")
        }
    }
}