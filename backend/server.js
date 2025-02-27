/********************************************************************
 * File Name: server.js
 * Date: 1/13/2025
 * Description: Loads routes and server setup
 * Author(s): CS 362-Team 20
 ********************************************************************/

import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { FRONTEND_URL, AUTH0_AUDIENCE, AUTH0_DOMAIN } from "./variables.js";
import helmet from "helmet";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();
const corsOptions = {
  origin: FRONTEND_URL,
};

if (
  !AUTH0_DOMAIN ||
  !AUTH0_AUDIENCE ||
  AUTH0_AUDIENCE === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

app.use(helmet());
// Enable cross origin resource sharing
app.use(cors(corsOptions));

const authOptions = {
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_DOMAIN,
  algorithms: ["RS256"],
};

const checkJwt = auth(authOptions);

app.use("*", (req, res, next) => {
  console.log("Request received at: ", new Date());
  next();
});

app.use('*', checkJwt, (req, res, next) => {
  console.log("Authenticated request received at: ", new Date());
  console.log("Token:", req.auth);
  next();
});

app.use("/users", checkJwt, userRoutes);
app.use("/tasks", checkJwt, taskRoutes);
app.use("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

//use public routes
// app.use("/users", userRoutes);
// app.use("/tasks", taskRoutes);

export default app;