export function printMarks(marks: number, callback: () => void): void {
    if(marks > 30) {
        callback();
    }
}