const devUrl = "http://localhost:5000";
const prodUrl = "https://food-app-backend-brdj.vercel.app";
export const url = process.env.NODE_ENV==="development"?devUrl:prodUrl;
