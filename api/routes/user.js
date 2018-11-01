const express = require("express");
const router = express.Router();
const user = require("../models/user");

// Get the current user's session.
router.get("/", async (req, res, next) => {
  try {
    const fakeUser = {
      name: "TextTrackList",
      type: "test",
      id: 1
    };

    res.send(fakeUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
