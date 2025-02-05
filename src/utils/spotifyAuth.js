const CLIENT_ID = "465d0f050b12484697177ff5238d3226";
const REDIRECT_URI = "http://localhost:5173/home";
const SCOPES = ["streaming", "user-read-email", "user-read-private", "user-modify-playback-state", "user-read-playback-state"];

export const getAuthUrl = () => {
  const url = new URL("https://accounts.spotify.com/authorize");
  url.searchParams.append("client_id", CLIENT_ID);
  url.searchParams.append("response_type", "token");
  url.searchParams.append("redirect_uri", REDIRECT_URI);
  url.searchParams.append("scope", SCOPES.join(" "));

  return url.toString();
};

export const getTokenFromUrl = () => {
  const hash = window.location.hash.substring(1);
  return Object.fromEntries(new URLSearchParams(hash));
};
