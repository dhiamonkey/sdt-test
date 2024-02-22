// import express, { Request, Response, Router } from "express";
// import UserModel from "../models/user";
// import { sequelizeConnect } from "../configs/connect";
// // import { renderErrorResult } from "../functions/utils";
// import { Model } from "sequelize";

// // Define the type for the user model instance
// type UserInstance = Model<any, any>;

// //TODO fix Expected 0 arguments, but got 1.ts
// // const User = UserModel(sequelizeConnect);

// // Initialize Express Router
// const router: Router = express.Router();

// // GET /users - Retrieve all users
// router.get("/", async (req: Request, res: any) => {
//   try {
//     // Find all users in the database
//     const users: UserInstance[] = await User.findAll();

//     // Send the users as a JSON response
//     res.json(users);
//   } catch (error: any) {
//     // Render error result
//     renderErrorResult(res, error);
//   }
// });

// // POST /users - Create a new user
// router.post("/", async (req: Request, res: any) => {
//   try {
//     // Create a new user using the request body
//     const response: any = await User.create(req.body); // Adjust the type as per your Sequelize Model

//     // Send a JSON response indicating success or failure
//     return res.json({
//       status: response ? "success" : "failed",
//     });
//   } catch (error: any) {
//     // Render error result
//     renderErrorResult(res, error);
//   }
// });

// // PUT /users/:id - Update a user by ID
// router.put("/:id", async (req: Request, res: any) => {
//   try {
//     // Extract the ID from the request parameters
//     const { id } = req.params;

//     if (!parseInt(id)) {
//       throw new Error("Id must be in integer format");
//     }

//     // Update the user with the given ID using the request body
//     const [affectedCount]: [number] = await User.update(req.body, {
//       where: { id: id },
//     });

//     // Send a JSON response indicating success or failure
//     return res.json({
//       status: affectedCount ? "success" : "failed",
//     });
//   } catch (error: any) {
//     // Render error result
//     renderErrorResult(res, error);
//   }
// });

// // DELETE /users/:id - Delete a user by ID
// router.delete("/:id", async (req: Request, res: any) => {
//   try {
//     // Extract the ID from the request parameters
//     const { id } = req.params;

//     if (!parseInt(id)) {
//       throw new Error("Id must be in integer format");
//     }

//     // Delete the user with the given ID
//     const response: number = await User.destroy({ where: { id: id } });

//     // Send a JSON response indicating success or failure
//     return res.json({
//       status: response ? "success" : "failed",
//     });
//   } catch (error: any) {
//     // Render error result
//     renderErrorResult(res, error);
//   }
// });

// export default router;
