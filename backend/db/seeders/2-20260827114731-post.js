"use strict";

const { Post } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Post.bulkCreate(
      [
        {
          firstname: "Luffy",
          lastname: "Monkey",
          email: "monkey-d-luffy@hotmail.com",
          message:
            "Give me a call back at 6663629 asap. I need you on this crew.",
        },
        {
          firstname: "Zoro",
          lastname: "Roronoa",
          email: "roronoa-zoro@hotmail.com",
          message:
            "Bring back my swords, and bring some booze while your at it.",
        },
        {
          firstname: "Sanji",
          lastname: "Vansmoke",
          email: "vansmoke-sanji@hotmail.com",
          message:
            "Please, do enjoy my food on me. Also, how do you know so many beautiful women?",
        },
      ],
      { validate: true },
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Posts";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        firstname: { [Op.in]: ["Luffy", "Zoro", "Sanji"] },
      },
      {},
    );
  },
};
