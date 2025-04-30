const express = require("express");
const router = express.Router();
const { addEvent, getUserEvents } = require("../controllers/event.controller");

router.post("/add", addEvent);
router.get("/user/:userId", getUserEvents);

module.exports = router;
