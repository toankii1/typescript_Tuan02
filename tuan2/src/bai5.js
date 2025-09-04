"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(2000).then(result => {
    console.log(result);
});
//# sourceMappingURL=bai5.js.map