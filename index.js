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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = __importDefault(require("./config"));
const schema_1 = __importDefault(require("./config/schema"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const schema = yield schema_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({ req, res })
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json({ home: "Welcoe home...", config: config_1.default });
    }));
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log("express server started");
    });
    if (config_1.default.ENV == "development") {
        app.listen(PORT, () => {
            console.log("express server started");
        });
    }
    else {
        app.listen();
    }
}))();
//# sourceMappingURL=index.js.map