const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Post } = require("../../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({ order: [["createdAt", "DESC"]] });

    res.status(200).json({ posts: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
