function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task done after ${time} ms`);
    }, time);
  });
}

Promise.race([
  simulateTask(1000),
  simulateTask(2000),
  simulateTask(1500)
]).then(result => {
  console.log("hoan thanh:", result);
});


