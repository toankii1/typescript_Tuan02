"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRamdomNumber() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.2) {
                resolve(random);
            }
            else {
                reject("random number too low");
            }
        }, 1000);
    });
}
getRamdomNumber().then(num => {
    console.log("Succes, numbers: ", num);
})
    .catch(err => {
    console.error("Error: ", err);
});
//# sourceMappingURL=bai4.js.map