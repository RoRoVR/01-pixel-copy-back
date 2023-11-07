"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pixelcopy_controller_1 = require("../controllers/pixelcopy.controller");
const pixelCopyRoute = (0, express_1.Router)();
pixelCopyRoute.get('/api/pixelcopy', pixelcopy_controller_1.getPixelArts);
exports.default = pixelCopyRoute;
//# sourceMappingURL=pixelcopy.route.js.map