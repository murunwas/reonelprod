"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const EmailService_1 = require("../services/EmailService");
let EmailInput = class EmailInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EmailInput.prototype, "to", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EmailInput.prototype, "message", void 0);
EmailInput = __decorate([
    type_graphql_1.InputType()
], EmailInput);
let EmailResolver = class EmailResolver {
    sendEmail(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield EmailService_1.adminEmail(input.message, input.to);
                yield EmailService_1.thankYouEmail(input.to);
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("input", () => EmailInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailInput]),
    __metadata("design:returntype", Promise)
], EmailResolver.prototype, "sendEmail", null);
EmailResolver = __decorate([
    type_graphql_1.Resolver()
], EmailResolver);
exports.EmailResolver = EmailResolver;
//# sourceMappingURL=EmailResolver.js.map