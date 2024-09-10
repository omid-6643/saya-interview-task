import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import { ENV_VARS } from "./config/envVars.js";
import postRoutes from "./routes/post.route.js";
import cors from 'cors'

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json()); // will allow us to parse req.body in controllers
app.use(cors());
app.options("*", cors());

app.use("/api/v1/post", postRoutes);

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
});
