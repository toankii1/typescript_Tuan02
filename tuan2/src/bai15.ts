async function tripleAfter1s(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

// --- Gọi tuần tự ---
async function runSequential() {
  const first = await tripleAfter1s(2);
  console.log("First:", first); 

  const second = await tripleAfter1s(first);
  console.log("Second:", second); 

  const third = await tripleAfter1s(second);
  console.log("Third:", third); 

  console.log("Final Result:", third);
}

// --- Test ---
runSequential();
