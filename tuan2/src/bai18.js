"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}
// --- Test ---
async function run() {
    const user = await fetchUser(1);
    console.log("Fetched user:", user);
}
run();
//# sourceMappingURL=bai18.js.map