import axios from "axios";

export async function fetchGitHubUser(username: string) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    return response;
  } catch (error) {
    if (error.status === 404) {
      throw new Error("Not found! Try another username.");
    }
    if (error.status === 403) {
      throw new Error(
        "You've done more than 60 searches. Try again in 1 hour.",
      );
    }
  }
}
