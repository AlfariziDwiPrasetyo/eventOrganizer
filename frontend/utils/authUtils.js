import axiosInstance from "../utils/axiosInstance";

export const isLoggedIn = async () => {
  try {
    const response = await axiosInstance.get("user/profile"); // Replace '/check-auth' with your authentication check endpoint
    return response.data; // Assuming the server responds with a boolean indicating authentication status
  } catch (error) {
    // Handle any errors (e.g., network issues, server errors)
    console.error("Error checking authentication:", error.message);
    return false; // Return false by default if there's an error
  }
};
