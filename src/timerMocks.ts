export function timer(callback: Function) {
    console.log("Starting the timer");
    setTimeout(() => {
        console.log("Ending the timer");
        callback ? callback() : undefined;
    }, 1000);
}