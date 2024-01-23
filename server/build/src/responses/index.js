"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.emailNotVerified = exports.userNotFound = void 0;
const userNotFound = [
    {
        msg: "Your email or password is incorrect"
    }
];
exports.userNotFound = userNotFound;
const emailNotVerified = [
    {
        msg: "Please verify your email before logging in"
    }
];
exports.emailNotVerified = emailNotVerified;
const resetPassword = [
    {
        msg: "If a user with that email exists, you will receive an email with instructions to reset password"
    }
];
exports.resetPassword = resetPassword;
