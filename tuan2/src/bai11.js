"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 1000);
    });
}
async function run() {
    const message = await helloWorld();
    console.log(message);
}
run();
//# sourceMappingURL=bai11.js.map