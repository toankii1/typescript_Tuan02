"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done after ${time} ms`);
        }, time);
    });
}
Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500)
]).then(results => {
    console.log("All tasks finished:");
    results.forEach(r => console.log(r));
});
//# sourceMappingURL=bai6.js.map