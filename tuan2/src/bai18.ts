async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User${id}` });
    }, 1000);
  });
}

// --- Test ---
async function run() {
  const user = await fetchUser(1);
  console.log("Fetched user:", user);
}

run();
