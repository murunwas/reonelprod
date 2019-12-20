"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { NODE_ENV, SMTP, URL, PASS, USER } = process.env;
const config = {
    SMTP,
    USER,
    PASS,
    ENV: NODE_ENV,
    IsProd: NODE_ENV === "production",
    CorsUrl: URL
};
exports.default = config;
//# sourceMappingURL=index.js.map