async function fetchUser(
  id: number,
  timeoutMs: number = 2000
): Promise<{ id: number; name: string }> {
  const apiCall = new Promise<{ id: number; name: string }>((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User${id}` });
    }, 3000); 
  });

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, timeoutMs);
  });

  return Promise.race([apiCall, timeout]);
}

// --- Test ---
async function run() {
  try {
    const user = await fetchUser(1); 
    console.log("Fetched user:", user);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

run();
