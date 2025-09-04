"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id, timeoutMs = 2000) {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 3000);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeoutMs);
    });
    return Promise.race([apiCall, timeout]);
}
// --- Test ---
async function run() {
    try {
        const user = await fetchUser(1);
        console.log("Fetched user:", user);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("Unknown error:", error);
        }
    }
}
run();
//# sourceMappingURL=bai20.js.map