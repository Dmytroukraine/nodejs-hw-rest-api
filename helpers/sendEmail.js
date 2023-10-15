const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "dnfdim@gmail.com",
    pass: META_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "dnfdim@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;