import { Request, Response } from "express";
import PixelArt from "../models/pixelcopy";


export const getPixelArts = async(req: Request, res: Response) => {

    const pixelart = await PixelArt.findAll();

    return res.status(200).json({
        msg: 'getPixelArts',
        pixelart
    });
}

export const postPixelArt = async( req: Request, res: Response ) => {

    const { body } = req;

    const newPixelArt = PixelArt.build( body );
    await newPixelArt.save();

    return res.status(200).json({
        msg: 'postPixelArts',
        newPixelArt,
    });
}