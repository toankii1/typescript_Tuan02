"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}
async function fetchUsers(ids) {
    const promises = ids.map(id => fetchUser(id));
    return Promise.all(promises);
}
// --- Test ---
async function run() {
    const users = await fetchUsers([1, 2, 3]);
    console.log("Fetched users:", users);
}
run();
//# sourceMappingURL=bai19.js.map