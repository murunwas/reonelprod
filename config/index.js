"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    SMTP: process.env.SMTP,
    USER: process.env.USER,
    PASS: process.env.PASS,
    ENV: process.env.NODE_ENV,
    IsProd: process.env.NODE_ENV === "production",
    CorsUrl: process.env.URL
};
exports.default = config;
//# sourceMappingURL=index.js.map