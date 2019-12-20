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
const CryptoService_1 = require("../services/CryptoService");
let Crypto = class Crypto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Crypto.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Crypto.prototype, "img", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Crypto.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], Crypto.prototype, "zar", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    __metadata("design:type", Number)
], Crypto.prototype, "usd", void 0);
Crypto = __decorate([
    type_graphql_1.ObjectType()
], Crypto);
let CryptoResolver = class CryptoResolver {
    coins() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CryptoService_1.GetCryptos();
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Crypto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CryptoResolver.prototype, "coins", null);
CryptoResolver = __decorate([
    type_graphql_1.Resolver()
], CryptoResolver);
exports.CryptoResolver = CryptoResolver;
//# sourceMappingURL=CryptoResolver.js.map