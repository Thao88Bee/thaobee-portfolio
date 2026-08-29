const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Post } = require("../../db/models")

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.findAll();

  return res.json({ posts: posts });
});

module.exports = router;
