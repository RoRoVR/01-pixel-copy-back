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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pixelcopy_routes_1 = __importDefault(require("../routes/pixelcopy.routes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPath = {
            pixelcopy: '/api/pixelcopy'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // Initial METHODS
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online...'.bgGreen.white);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPath.pixelcopy, pixelcopy_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server in PORT:${this.port}`.green);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map