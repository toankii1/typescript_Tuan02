"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter(num => num % 2 === 0);
            resolve(evens);
        }, 1000);
    });
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterEvenNumbers(numbers).then(result => {
    console.log("Even numbers:", result);
});
//# sourceMappingURL=bai9.js.map