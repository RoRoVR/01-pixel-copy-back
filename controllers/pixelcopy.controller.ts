import { Request, Response } from "express";


export const getPixelArts = (req: Request, res: Response) => {

    return res.status(200).json({
        msg: 'OK'
    });
}

export const postPixelArt = ( req: Request, res: Response ) => {

    const { body } = req;

    return res.status(200).json({
        msg: 'postPixelArts',
        body
    });


}