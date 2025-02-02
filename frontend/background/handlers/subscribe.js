export async function handleSubscribe(message, sender, sendResponse) {
  try {
    const response = await fetch("http://localhost:3000/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Response from backend:", data);
    sendResponse(data)
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }
}
