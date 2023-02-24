let BASE_URL = "https://post-it-heroku.herokuapp.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://socialmedia-backend-mndy.onrender.com";
}

export { BASE_URL };
