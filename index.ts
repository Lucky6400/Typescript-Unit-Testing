// arrow functions
const printName: (name?: string) => void = (name: string) => console.log(name);

printName();

// regular functions
function getName(surname: string): string {
    return "Lucky " + surname;
}

// variables
const myName: string = "Test";
const myNumber: number = 64;
const truth: boolean = false;