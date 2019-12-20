"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
function SendEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { SMTP, USER, PASS } = config_1.default;
        const promise = new Promise(function (resolve, reject) {
            const transporter = nodemailer_1.default.createTransport({
                host: SMTP,
                port: 465,
                secure: true,
                auth: {
                    user: USER,
                    pass: PASS
                }
            });
            const mailOptions = {
                from: USER,
                to: data.to,
                subject: "",
                text: data.message,
                html: `<p>${data.message}</p>`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
            });
        });
        return promise;
    });
}
exports.default = SendEmail;
//# sourceMappingURL=EmailService.js.map