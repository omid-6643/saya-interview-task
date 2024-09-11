import cors from "cors";
import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import { ENV_VARS } from "./config/envVars.js";
import postRoutes from "./routes/post.route.js";

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json()); // will allow us to parse req.body in controllers
app.use(cors());
app.options("*", cors());

app.use("/api/v1/post", postRoutes);

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/.next")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", ".next", "server", "app", "index.html")
    );
  });
}

app.listen(PORT, () => {
  connectDB();
});
