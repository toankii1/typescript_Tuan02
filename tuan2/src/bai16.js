"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function tripleAfter1s(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
// --- Gọi song song ---
async function runParallel() {
    const results = await Promise.all([
        tripleAfter1s(2),
        tripleAfter1s(4),
        tripleAfter1s(6)
    ]);
    console.log("Results:", results);
}
// --- Test ---
runParallel();
//# sourceMappingURL=bai16.js.map