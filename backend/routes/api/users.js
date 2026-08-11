const express = require("express");
const bcrypt = require("bcryptjs");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

// Sign up
router.post("/", async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username,
    firstname,
    lastname,
    email,
    hashedPassword,
  });

  const safeUser = {
    id: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

module.exports = router;
