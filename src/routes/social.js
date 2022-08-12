const express = require("express");
const socialRouter = express.Router();

socialRouter.get("", async (req, res) => {
    res.render("social");
});

module.exports = socialRouter;