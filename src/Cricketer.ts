export class Cricketer {
    private name: string;
    private type: string;
    private isCaptain: boolean;

    constructor(name: string, type: string, isCaptain: boolean) {
        this.name = name;
        this.type = type;
        this.isCaptain = isCaptain;
    }

    get getName() { 
        return this.name;
    }

    get getType() {
        return this.type;
    }

    get isTeamCaptain() {
        return this.isCaptain;
    }
}