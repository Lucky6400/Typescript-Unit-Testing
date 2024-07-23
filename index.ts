const arr: string[] = ["Name", "Email"];

const arr2: number[] = [1, 2, 3, 4];

// union types
const arr3: (number | string)[] = [1, "Name"];

type MyObj1 = { name: string; }

type MyObj2 = { email: string }

// intersection types
type ResultObj = MyObj1 & MyObj2;

const myobj: ResultObj = {
    name: "",
    email: ""
}

const myPlayer: any = undefined;

const myPlayer2: unknown = undefined;


