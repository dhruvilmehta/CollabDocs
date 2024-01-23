"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_js_1 = __importDefault(require("../../config/db.config.js"));
const user_model_js_1 = require("./user.model.js");
const refreshToken_model_js_1 = require("./refreshToken.model.js");
const role_model_js_1 = require("./role.model.js");
const userRole_model_js_1 = require("./userRole.model.js");
const document_model_js_1 = require("./document.model.js");
const documentUser_model_js_1 = require("./documentUser.model.js");
const sequelize_1 = __importDefault(require("sequelize"));
db_config_js_1.default.addModels([
    user_model_js_1.User,
    refreshToken_model_js_1.RefreshToken,
    role_model_js_1.Role,
    userRole_model_js_1.UserRole,
    document_model_js_1.Document,
    documentUser_model_js_1.DocumentUser,
]);
const db = {
    Sequelize: sequelize_1.default,
    sequelize: db_config_js_1.default,
    User: user_model_js_1.User,
    RefreshToken: refreshToken_model_js_1.RefreshToken,
    Role: role_model_js_1.Role,
    UserRole: userRole_model_js_1.UserRole,
    Document: document_model_js_1.Document,
    DocumentUser: documentUser_model_js_1.DocumentUser
};
exports.default = db;
