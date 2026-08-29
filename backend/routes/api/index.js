const router = require("express").Router();

const sessionRouter = require("./session.js");
const postRouter = require("./post.js");

const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/posts", postRouter);

module.exports = router;
