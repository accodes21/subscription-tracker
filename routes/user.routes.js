import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ message: "Create users" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ message: "Update users" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete users" });
});

export default userRouter;
