"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNumberAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
getNumberAsync().then(result => {
    console.log(result);
});
//# sourceMappingURL=bai2.js.map