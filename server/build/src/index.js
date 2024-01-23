"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config.js");
const env_config_js_1 = __importDefault(require("./config/env.config.js"));
const index_js_1 = __importDefault(require("./db/models/index.js"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const error_handler_js_1 = __importDefault(require("./middleware/error-handler.js"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(error_handler_js_1.default);
const port = env_config_js_1.default.PORT;
index_js_1.default.sequelize.sync();
// app.get("/",(req:Request, res:Response)=>{
//     console.log("Hello")
//     res.send("Express + Typescript")
// })
// app.listen(port, ()=>{
//     console.log(`Server is running at port ${port}`)
// })
exports.default = app;
