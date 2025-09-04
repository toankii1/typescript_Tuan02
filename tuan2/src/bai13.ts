function simulateTask(time: number, shouldFail: boolean = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Task failed");
      } else {
        resolve(`Task done after ${time} ms`);
      }
    }, time);
  });
}

async function runTask() {
  try {
    const result = await simulateTask(2000, true); 
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Done");
  }
}

runTask();
