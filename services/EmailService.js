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
                subject: data.subject,
                text: data.message,
                html: data.message
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
function thankYouEmail(to) {
    const message = `
  <p>Hi there,</p>

Thank you for reaching out to Reonel consulting. Your request has been received and is being reviewed by our team.
<br/>
<p>Talk to you soon,</p>
<p><i>Reonel consulting.</i></p>
  `;
    return SendEmail({ message, to, subject: "Thank you for contacting Reonel consulting." });
}
exports.thankYouEmail = thankYouEmail;
function adminEmail(msg, from) {
    const message = `
  <p>Hi, Reonel consulting Team.</p>
  <br/>
  <p>You have recieved a message from: <b>${from}</b></p>
  <p>${msg}</p>
  `;
    const email = config_1.default.IsProd ? config_1.default.USER : "mcengy@gmail.com";
    return SendEmail({ message, to: email, subject: "Message from Reonel.co.za user." });
}
exports.adminEmail = adminEmail;
exports.default = SendEmail;
//# sourceMappingURL=EmailService.js.map