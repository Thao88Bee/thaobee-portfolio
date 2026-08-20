"use strict";

const { adminEmail, adminPassword, adminUsername } = require("../../config");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          username: adminUsername,
          firstname: "Bee",
          lastname: "Thao",
          email: adminEmail,
          hashedPassword: bcrypt.hashSync(adminPassword),
        },
      ],
      { validate: true },
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: [adminUsername] },
      },
      {},
    );
  },
};
