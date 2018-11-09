const express = require("express");
const router = express.Router();
const usersModel = require("../models/users");

// Get the current user's session.
router.get("/", async (req, res, next) => {
  try {
    const users = await usersModel.getUsers();
    res.send(users);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
