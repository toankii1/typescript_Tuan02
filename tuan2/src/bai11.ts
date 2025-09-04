function helloWorld(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

async function run() {
  const message = await helloWorld();
  console.log(message); 
}

run();
