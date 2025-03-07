import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ message: "Get all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ message: "Get specific subscription" })
);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ message: "UPDATE specific subscription" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ message: "DELETE specific subscription" })
);

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ message: "Cancel subscription" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ message: "Get upcoming renewals" })
);

export default subscriptionRouter;
