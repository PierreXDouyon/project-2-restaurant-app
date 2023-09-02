const apiUrl = "http://localhost:3000/api";

// Function to login user data
export async function loginUser(username) {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify the content type
      // You can add other headers here if needed, like authentication headers
    },
    body: JSON.stringify(username), // Convert the data to JSON
  });
  if (!response.ok) {
    throw new Error("Failed to login user");
  }
  return response.json();
}
