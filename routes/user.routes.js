import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "Get users" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ message: "Get specific users" });
});
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
