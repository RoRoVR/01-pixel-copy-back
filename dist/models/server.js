"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pixelcopy_routes_1 = __importDefault(require("../routes/pixelcopy.routes"));
class Server {
    constructor() {
        this.apiPath = {
            pixelcopy: '/api/pixelcopy'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // Initial METHODS
        this.middlewares();
        this.routes();
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
            console.log(`Server in PORT:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map