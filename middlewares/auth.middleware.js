import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      console.log("No token provided");
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
      console.log("Decoded token:", decoded);
    } catch (error) {
      console.log("Token verification failed:", error.message);
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // Find user
    const user = await User.findById(decoded.userId);
    console.log("User found:", user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.log("Authorization error:", error.message);
    return res
      .status(401)
      .json({ message: "Unauthorized", error: error.message });
  }
};

export default authorize;
