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
exports.postPixelArt = exports.getRandomPixelArts = exports.getPixelArts = void 0;
const pixelcopy_1 = __importDefault(require("../models/pixelcopy"));
const getPixelArts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pixelart = yield pixelcopy_1.default.findAll();
    return res.status(200).json({
        msg: 'getPixelArts',
        pixelart
    });
});
exports.getPixelArts = getPixelArts;
const getRandomPixelArts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pixelart = yield pixelcopy_1.default.findAll();
    const numRandom = Math.floor(Math.random() * (pixelart.length));
    return res.status(200).json({
        msg: 'getRandomPixelArts',
        pixelart: pixelart[numRandom],
    });
});
exports.getRandomPixelArts = getRandomPixelArts;
const postPixelArt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const newPixelArt = pixelcopy_1.default.build(body);
    yield newPixelArt.save();
    return res.status(200).json({
        msg: 'postPixelArts',
        newPixelArt,
    });
});
exports.postPixelArt = postPixelArt;
//# sourceMappingURL=pixelcopy.controller.js.map