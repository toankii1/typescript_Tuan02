"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function doubleAfter1s(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}
async function run() {
    const promises = [1, 2, 3, 4].map(n => doubleAfter1s(n));
    for await (const result of promises) {
        console.log("Result:", result);
    }
}
run();
//# sourceMappingURL=bai17.js.map