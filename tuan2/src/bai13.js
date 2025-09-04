"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed");
            }
            else {
                resolve(`Task done after ${time} ms`);
            }
        }, time);
    });
}
async function runTask() {
    try {
        const result = await simulateTask(2000, true);
        console.log(result);
    }
    catch (error) {
        console.log("Error:", error);
    }
    finally {
        console.log("Done");
    }
}
runTask();
//# sourceMappingURL=bai13.js.map