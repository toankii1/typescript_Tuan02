"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} ms`);
        }, time);
    });
}
async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
runTask();
//# sourceMappingURL=ba12.js.map