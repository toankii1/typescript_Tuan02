"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function tripleAfter1s(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
// --- Test ---
async function run() {
    const result = await tripleAfter1s(5);
    console.log("Result:", result);
}
run();
//# sourceMappingURL=bai14.js.map