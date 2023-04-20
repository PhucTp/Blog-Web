import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  updatePassword,
  resetPassword,
} from "../controller/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.post("/resetPasswordEmail", resetPassword);
router.post("/updatepassword", updatePassword);
router.get("/ResetPassword", function (req, res) {
  res.render("ResetPassword", {
    title: "Reset Password",
    token: req.query.token,
  });
});
export default router;
