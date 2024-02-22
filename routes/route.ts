import express, { Request, Response, Router } from "express";
import User from "../models/user";
import { sequelizeConnect } from "../configs/connect";
// import { renderErrorResult } from "../functions/utils";
import { Model } from "sequelize";

// Initialize Express Router
const router: Router = express.Router();
const db = sequelizeConnect();

// GET /users - Retrieve all users
router.get("/", async (req: Request, res: any) => {
  try {
    await db.authenticate();
    const userResponse = await User.findAll();
    res.send(userResponse);
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

router.post("/test", async (req: Request, res: any) => {
  try {
    await db.authenticate();
    await db.sync({ force: true });
    const user = await User.create({
      id: 12313214,
      first_name: "jon",
      last_name: "doe",
      location: "canada",
      timezone: "asda",
      email: "jondoe@mail.com",
      event_date: "",
    });
    await user.save();
    res.send("success");
  } catch (error) {
    console.error("res send errpr:", error);
    res.send(error);
  }
});

export default router;
