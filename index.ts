import express from "express";
// import userRouter from "./routes/users";
import { sequelizeConnect } from "./configs/connect";
import cron from "node-cron";
// import { sendEmail } from "./functions/send-email";
import "dotenv/config";
import routeTest from "./routes/route";

// init sqlite db
sequelizeConnect()
  .sync()
  .then(() => console.log("db is ready"));

// Create an instance of the Express.js app
const app = express();
// Set the port number for the server to listen on
const port = 3005;
app.use(express.json());

// Define a route for the root URL ("/") that responds with a message
app.get("/", (req, res) => {
  res.json("Hello, TypeScript with Express!");
});

// Use the user router module to handle requests to URLs that start with "/users"
// app.use("/users", userRouter);
app.use("/users", routeTest);

// Set up the server to listen on the specified port and log a message to the console
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

cron.schedule("0 9 * * *", async () => {
  console.log("running a task every day at 9am");
  // birthday
  // await sendEmail("birthday");
  // // anniversary
  // await sendEmail("anniversary");
});

export default app;
