"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwErrorAsync() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("something went wrong");
        }, 1000);
    });
}
throwErrorAsync().catch(error => {
    console.log(error);
});
//# sourceMappingURL=bai3.js.map