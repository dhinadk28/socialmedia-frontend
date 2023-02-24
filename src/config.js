let BASE_URL = "https://socialmedia-backend-3b1b.onrender.com";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://socialmedia-backend-mndy.onrender.com";
}

export { BASE_URL };
