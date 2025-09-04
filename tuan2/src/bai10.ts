function simulateTask(time: number, shouldFail: boolean = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Task failed");
      } else {
        resolve("Task succeeded");
      }
    }, time);
  });
}

simulateTask(1000, false)
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Done"); 
  });
