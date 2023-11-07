"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPixelArt = exports.getPixelArts = void 0;
const getPixelArts = (req, res) => {
    return res.status(200).json({
        msg: 'OK'
    });
};
exports.getPixelArts = getPixelArts;
const postPixelArt = (req, res) => {
    const { body } = req;
    return res.status(200).json({
        msg: 'postPixelArts',
        body
    });
};
exports.postPixelArt = postPixelArt;
//# sourceMappingURL=pixelcopy.controller.js.map