import Backendless from "./backendless";

// Get the currently logged-in user, or null if none
export async function getCurrentUser() {
  try {
    const user = await Backendless.UserService.getCurrentUser();
    return user || null;
  } catch (err) {
    console.error("Error fetching current user:", err);
    return null;
  }
}
