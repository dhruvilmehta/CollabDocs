"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
const transporter = (0, nodemailer_1.createTransport)({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: "dhruvilmehta2606@gmail.com",
        pass: "fhncoqdytgydhcis"
    },
    secure: true
});
exports.default = transporter;
