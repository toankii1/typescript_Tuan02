"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed");
            }
            else {
                resolve("Task succeeded");
            }
        }, time);
    });
}
simulateTask(1000, false)
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.log(error);
})
    .finally(() => {
    console.log("Done");
});
//# sourceMappingURL=bai10.js.map