console.log('Hello World from TypeScript!');
function greet(name: string): string {
    return 'Hello, ${name}!';
}
const message: string = greet("TypeScript World");
console.log(message);


