const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { adminEmail } = require("../../config");
const { Post } = require("../../db/models");

const router = express.Router();

const validatePost = [
  check("firstname")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage("Please provide a first name with at least 3 characters."),
  check("lastname")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage("Please provide a last name with at least 3 characters."),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("message")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Message is required"),
  handleValidationErrors,
];

router.get("/", async (_, res) => {
  try {
    const posts = await Post.findAll({ order: [["createdAt", "DESC"]] });

    res.status(200).json({ posts: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", validatePost, async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;

    const newPost = await Post.create({
      firstname,
      lastname,
      email,
      message,
    });

    res.status(201).json({ message: "Review submitted successfully", newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:postId", requireAuth, async (req, res) => {
  try {
    const userEmail = req.user.email;
    const postId = parseInt(req.params.postId);
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({
        message: "Post couldn't be found",
      });
    }

    if (adminEmail !== userEmail) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    await post.destroy();
    return res.json({
      message: "Successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
