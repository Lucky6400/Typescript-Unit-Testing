interface Cricketer {
    name: string;
    type: string;
    batHand: string;
    isWk: boolean;
    battingAverage: number;
}


abstract class CricketerImpl implements Cricketer {
    private _name: string;
    public type: string;
    batHand: string;
    isWk: boolean;
    battingAverage: number;

    protected isVC: boolean;

    private isFielding: boolean = false;

    get name(): string { return this._name; }

    abstract printCaptainName(): void;

}


class ChildCricketer extends CricketerImpl {
    printCaptainName(): void {
        console.log("MS Dhoni")
    }

}