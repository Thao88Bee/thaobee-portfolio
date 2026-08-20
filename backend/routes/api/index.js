const router = require("express").Router();

const sessionRouter = require("./session.js");

const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use("/session", sessionRouter);

module.exports = router;
